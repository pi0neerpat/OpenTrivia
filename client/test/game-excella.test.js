it("allows people to pay the fee and marks them as players", async () => {
  await game.methods.register("Bob").send({
    value: web3.utils.toWei("1", "ether"),
    from: accounts[1],
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
