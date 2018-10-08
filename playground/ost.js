/////////////////////////////////////////////////
OSTSDK = require("@ostdotcom/ost-sdk-js");
const apiEndpoint = "https://sandboxapi.ost.com/v1.1";
const api_key = "5de2fac69a9eee63da1f";
const api_secret =
  "47d7f74bcfb471253e53eb6d876a961b59c4a1e0d98452fc18f439a756cf7491";
const ostObj = new OSTSDK({
  apiKey: api_key,
  apiSecret: api_secret,
  apiEndpoint: apiEndpoint
});
const userService = ostObj.services.users;
const airdropService = ostObj.services.airdrops;
const transactionService = ostObj.services.transactions;
const actionService = ostObj.services.actions; // initializes an action object
// Actions
let answer_ActionId = "40052";
let vote_ActionId = "40053";
let end_ActionId = "40054";
// let transfer_ActionId = "39942";
////////////////////OST///////////////////////
const axios = require("axios");
let userName;
// let walletId = "494dd34a-050b-49af-8ded-0a94efde0213";
let tokenBalance;

// userService
//   .create({ name: "Steve" })
//   .then(res => {
//     // console.log(JSON.stringify(res));
//     userName = res.data.user.name;
//     walletId = res.data.user.id;
//     tokenBalance = res.data.user.token_balance;
//     console.log(
//       `{~~OST~~} New user created! Name: ${userName}. Wallet Id: ${walletId}`
//     );
//   })
//   .catch(err => console.log(`{~~OST~~} ERROR new user: ${JSON.stringify(err)}`))
//   .then(() => {
// const airdropAmount = 2;
// const num = airdropAmount;
// console.log(walletId, num, typeof num);
// airdropService
//   .execute({
//     amount: 1,
//     user_ids: walletId
//   })
//   .then(function(res) {
//     //console.log(JSON.stringify(res));
//     console.log(
//       `{~~OST~~} Airdrop ${airdropAmount} tokens submitted: [${
//         res.success
//       }] with transaction id: [${res.data.airdrop.id}]`
//     );
//   })
//   .catch(function(err) {
//     // console.log(JSON.stringify(err));
//     console.log(`{~~OST~~} ERROR airdrop: ${JSON.stringify(err)}`);
//   });
// });

// .then(() => {
// let walletId = "759e45c9-8df7-4b0c-b645-79ec30427638";
// transactionService
//   .execute({
//     action_id: vote_ActionId,
//     from_user_id: "0x1BDd1734a0BF7870C20c794DeBB3C82FAbB66789",
//     to_user_id: "0xd62911e9e87d3be4dafd05ae72b5ff1fdea1ef3e",
//     currency: "BT"
//   })
//   .then(function(res) {
//     console.log(JSON.stringify(res));
//   })
//   .catch(function(err) {
//     console.log(JSON.stringify(err));
//   });

axios
  .patch(`http://localhost:3001/users`, {
    action_id: 40053,
    from: "0x",
    to: "0xd62911e9e87d3be4dafd05ae72b5ff1fdea1ef3e"
  })
  .then(res => {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err.response.data);
  });

// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get transaction history - olde way!
// let userHistory = [];
// transactionService
//   .list({ page_no: 1, limit: 10 })
//   .then(function(res) {
//     // let txs = res.data.transactions;
//     // console.log(res.data.transactions);
//     res.data.transactions.map(tx => {
//       userHistory.push({ amount: tx.amount, from: tx.from_user_id });
//       console.log(tx.amount);
//     });
//   })
//   .catch(function(err) {
//     console.log(JSON.stringify(err));
//   })
//   .then(console.log(JSON.stringify(userHistory)));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get transaction history (new way)
// ost_ledger = ostObj.services.ledger;
// ost_ledger
//   .get({ id: "494dd34a-050b-49af-8ded-0a94efde0213" })
//   .then(res => {
//     // console.log(res.data.transactions[0]);
//     let txs = res.data.transactions;
//     console.log(txs[0].id);
//   })
//   .catch(function(err) {
//     console.log(JSON.stringify(err));
//   });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create a new action https://dev.ost.com/docs/api_actions_create.html
// actionService
//   .create({
//     name: "End a Game",
//     kind: "user_to_user",
//     arbitrary_amount: true,
//
//     currency: "BT"
//   })
//   .then(function(res) {
//     console.log(JSON.stringify(res));
//   })
//   .catch(function(err) {
//     console.log(JSON.stringify(err));
//   });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GRAB funds from all user_to_company
// userService
//   .list({ limit: 1, order_by: "name" })
//   .then(function(res) {
//     console.log(res);
//     res.data.users.map(user => {
//       console.log(
//         `user: ${user.name} tokens: ${user.token_balance} id: ${user.id}`
//       );
//       transactionService
//         .execute({
//           action_id: discount_ActionId,
//           from_user_id: user.id,
//           currency: "BT",
//           amount: user.token_balance
//         })
//         .then(function(res) {
//           console.log(JSON.stringify(res));
//         })
//         .catch(function(err) {
//           console.log(JSON.stringify(err));
//         });
//     });
//     // console.log(JSON.stringify(res));
//   })
//   .catch(function(err) {
//     console.log(JSON.stringify(err));
//   });
