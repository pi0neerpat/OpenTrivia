const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
var mnemonic =
  "fortune cherry broom april game spice produce flight piece sunny gather silly";
const provider = new HDWalletProvider(mnemonic, "http://localhost:7545", 0, 10);
const web3 = new Web3(provider);
const axios = require("axios");

const compiledFactory = require("./build/GameFactory.json");
const compiledGame = require("../ethereum/build/Game.json");

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const factory = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ gas: "3000000", from: accounts[0] });

  console.log("Factory Contract deployed to: ", factory.options.address);

  //=================GAME 1 ===================
  let gameName = "Hello game";
  await factory.methods
    .createGame(
      web3.utils.toWei("1", "ether"),
      gameName,
      "Have we landed on the moon?;Should you drizzle on your truffle box?",
      "yes;always"
    )
    .send({
      from: accounts[1],
      gas: "3000000"
    });

  // Get deployed game address and create a new database entry + OST account
  const gameAddress1 = await factory.methods.deployedGames(0).call();
  await axios
    // .post(`https://glacial-island-83032.herokuapp.com/users/${name: }`)
    .post(`http://localhost:3001/users`, {
      name: gameName,
      ethId: gameAddress1
    })
    .then(res => {
      return res.data.customers;
    })
    .catch(function(err) {
      return [];
    });

  //=================GAME 2 ===================
  gameName = "Game of place";
  await factory.methods
    .createGame(
      web3.utils.toWei("1", "ether"),
      gameName,
      "What planet is this?;Does ice typically float?",
      "Earth;yes"
    )
    .send({
      from: accounts[0],
      gas: "3000000"
    });

  // Get deployed game address and create a new database entry + OST account
  const gameAddress2 = await factory.methods.deployedGames(1).call();
  await axios
    // .post(`https://glacial-island-83032.herokuapp.com/users/${name: }`)
    .post(`http://localhost:3001/users`, {
      name: gameName,
      ethId: gameAddress2
    })
    .then(res => {
      return res.data.customers;
    })
    .catch(function(err) {
      return [];
    });

  //=================GAME 3 ===================
  gameName = "Game of who";
  await factory.methods
    .createGame(
      web3.utils.toWei("1", "ether"),
      gameName,
      "Who was the first president?;Does ice typically float?",
      "George Washington;yes"
    )
    .send({
      from: accounts[3],
      gas: "3000000"
    });

  // Get deployed game address and create a new database entry + OST account
  const gameAddress3 = await factory.methods.deployedGames(2).call();
  await axios
    // .post(`https://glacial-island-83032.herokuapp.com/users/${name: }`)
    .post(`http://localhost:3001/users`, {
      name: gameName,
      ethId: gameAddress3
    })
    .then(res => {
      return res.data.customers;
    })
    .catch(function(err) {
      return [];
    });

  game1 = await new web3.eth.Contract(
    JSON.parse(compiledGame.interface),
    gameAddress1
  );

  game2 = await new web3.eth.Contract(
    JSON.parse(compiledGame.interface),
    gameAddress2
  );

  console.log("Game contract deployed to: ", gameAddress1);
  console.log("Game contract deployed to: ", gameAddress2);
  console.log("Game contract deployed to: ", gameAddress3);

  // Game1 - Finished
  await game1.methods.register("Bob").send({
    value: web3.utils.toWei("1", "ether"),
    from: accounts[0],
    gas: 3000000
  });

  await game1.methods.register("Sue").send({
    value: web3.utils.toWei("1", "ether"),
    from: accounts[4],
    gas: 3000000
  });
  console.log("Players registered");
  await game1.methods.startRound().send({ from: accounts[1], gas: 3000000 });
  await game1.methods.guess("yes").send({ from: accounts[0], gas: 3000000 });
  await game1.methods.guess("yes").send({ from: accounts[4], gas: 3000000 });
  // Start Round 2
  await game1.methods.endRound().send({ from: accounts[1], gas: 3000000 });
  //End the game
  await game1.methods.endRound().send({ from: accounts[1], gas: 3000000 });
  // Bob withdraws his prize
  await game1.methods.withdrawPrize().send({ from: accounts[0], gas: 3000000 });

  // Game2 - Registration closed
  await game2.methods.register("Mary").send({
    value: web3.utils.toWei("1", "ether"),
    from: accounts[1],
    gas: 3000000
  });
  await game2.methods.register("Joe").send({
    value: web3.utils.toWei("1", "ether"),
    from: accounts[6],
    gas: 3000000
  });
  console.log("Players registered");
  await game2.methods.startRound().send({ from: accounts[0], gas: 3000000 });
};
deploy();
return {};
