const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider({ port: "127.0.0.1:7545" }));

const compiledFactory = require("../ethereum/build/GameFactory.json");
const compiledGame = require("../ethereum/build/Game.json");

let accounts;
let factory;
let gameAddress;
let game;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods
    .createGame(
      web3.utils.toWei("1", "ether"),
      "The best game",
      "Have we landed on the moon?;Should you drizzle on your truffle box?",
      "yes;always"
    )
    .send({
      from: accounts[0],
      gas: "3000000"
    });

  [gameAddress] = await factory.methods.getDeployedGames().call();
  game = await new web3.eth.Contract(
    JSON.parse(compiledGame.interface),
    gameAddress
  );
});

describe("Games", () => {
  it("deploys a factory and a game", () => {
    assert.ok(factory.options.address);
    assert.ok(game.options.address);
  });

  it("marks caller as the game manager", async () => {
    const manager = await game.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("allows people to pay the fee and marks them as players", async () => {
    await game.methods.register("Bob").send({
      value: web3.utils.toWei("1", "ether"),
      from: accounts[1],
      gas: 3000000
    });
    await game.methods.register("Sue").send({
      value: web3.utils.toWei("1", "ether"),
      from: accounts[2],
      gas: 3000000
    });
    const player = await game.methods.players(accounts[1]).call();
    assert(player.isRegistered);
  });

  it("requires the entry fee", async () => {
    try {
      await game.methods.register("Ace").send({
        value: "10",
        from: accounts[3],
        gas: 3000000
      });
    } catch (err) {
      assert(err);
      return;
    }
    assert(false);
  });

  it("allows manager to start the game and close registration", async () => {
    await game.methods.startRound().send({ from: accounts[0], gas: 3000000 });

    try {
      await game.methods.register("Ace").send({
        value: "100",
        from: accounts[3],
        gas: 3000000
      });
    } catch (err) {
      assert(err);
      return;
    }
    assert(false);
  });

  it("allows players to answer questions, receive points, and withdraw prize", async () => {
    await game.methods.register("Bob").send({
      value: web3.utils.toWei("1", "ether"),
      from: accounts[1],
      gas: 3000000
    });
    await game.methods.register("Sue").send({
      value: web3.utils.toWei("1", "ether"),
      from: accounts[2],
      gas: 3000000
    });

    await game.methods.startRound().send({ from: accounts[0], gas: 3000000 });

    await game.methods.guess("yes").send({ from: accounts[1], gas: 3000000 });

    await game.methods.guess("no").send({ from: accounts[2] });

    // Start Round 2
    await game.methods.endRound().send({ from: accounts[0] });
    //End the game
    await game.methods.endRound().send({ from: accounts[0] });

    const rounds = await game.methods.rounds(1).call();

    const player1 = await game.methods.players(accounts[1]).call();
    const player2 = await game.methods.players(accounts[2]).call();

    let initialBalance = await web3.eth.getBalance(accounts[1]);
    await game.methods.withdrawPrize().send({ from: accounts[1] });
    const finalBalance = await web3.eth.getBalance(accounts[1]);
    assert(
      player1.score == 1 && player2.score == 0 && finalBalance > initialBalance
    );
  });
});
