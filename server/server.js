// Dependencies
const _ = require("lodash");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

// Server + database configuration (environment variables)
require("./db/config");
const port = process.env.PORT;
var { mongoose } = require("./db/mongoose");
var { User } = require("./models/user");

///////////////////////OST/////////////////
// Dependencies
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
// Services
const userService = ostObj.services.users;
const airdropService = ostObj.services.airdrops;
const transactionService = ostObj.services.transactions;
const actionService = ostObj.services.actions; // initializes an action object
const ost_ledger = ostObj.services.ledger;
const ost_balance = ostObj.services.balances;
const ost_token = ostObj.services.token;
// Actions
let answer_ActionId = "40052";
let vote_ActionId = 40053;
let end_ActionId = "40054";
////////////////////OST///////////////////////

var app = express();
app.use(cors()); // Cors allows requests called from a browser (cross-origin-requests)
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  let walletId = "err...OST wallet not created before mongodb POST";
  let airdropAmount = 10;

  var ethId = req.body.ethId.toLowerCase();
  // Remove any special characters to conform to OST API requirement for name
  var name = req.body.name.replace(/\W/g, "");

  // console.log(ethId);
  let history = [];
  let upVotes = 0;
  console.log(" ");
  console.log("################## CREATE CALL  #####################");

  User.find({ ethId: ethId }).then(userArray => {
    console.log("Checking if user exists by ethId...");
    if (userArray.length > 0) {
      res.status(400).send("User already exists!");
      console.log("user already exists");
      return;
    } else {
      // Create new OST user
      console.log("creating a wallet...");
      console.log("request", req.body);
      userService
        .create({ name: name })
        .then(res => {
          // console.log(JSON.stringify(res));
          console.log(
            `${res.data.user.name}'s OST wallet was created | OST receipt: ${
              res.data.user.id
            }`
          );
          walletId = res.data.user.id;
        })
        .catch(err => console.log(`OST ${JSON.stringify(err)}`))
        .then(() => {
          airdropService
            .execute({
              amount: JSON.stringify(airdropAmount),
              user_ids: walletId
            })
            .then(function(res) {
              //console.log(JSON.stringify(res));
              console.log(
                `${airdropAmount} tokens were airdropped into their account | OST receipt: ${
                  res.data.airdrop.id
                }`
              );
            })
            .catch(function(err) {
              // console.log(JSON.stringify(err));
              console.log(`OST ERROR airdrop: ${JSON.stringify(err.err.code)}`);
            });
        })
        .then(() => {
          // POST to Mongo
          var user = new User({
            name: req.body.name,
            walletId: walletId,
            ethId: req.body.ethId.toLowerCase()
          });

          user.save().then(
            doc => {
              res.send(doc);
            },
            e => {
              res.status(400).send(e);
            }
          );
        });
    }
  });
});

app.get("/user/:ethId", (req, res) => {
  var ethId = req.params.ethId.toLowerCase();
  // console.log(ethId);
  let history = [];
  let upVotes = 0;
  console.log(" ");
  console.log("################## GET CALL  #####################");
  console.log(`Retrieving OST wallet for ETH address: ${ethId}`);
  User.find({ ethId: ethId }).then(
    userArray => {
      var user = userArray[0];
      if (typeof user == "undefined") {
        res.status(400).send(`User not found: ${ethId}`);
        return;
      }
      var walletId = user.walletId;
      console.log(`Getting OST wallet: ${walletId}`);
      ost_ledger.get({ id: walletId }).then(
        history => {
          // console.log(history);
          let transactions = history.data.transactions;
          // console.log(transactions.length);
          for (let i = 0; i < transactions.length; i++) {
            // console.log(transactions[i].action_id);
            if (transactions[i].action_id === vote_ActionId) {
              // console.log("upvote!");
              upVotes = upVotes + 1;
              // console.log(upVotes);
            }
          }
          // console.log(transactions);
          // console.log(upVoteActions);
          // console.log(upVotes);
          // let upVotes = upVoteActions.length();
          ost_balance.get({ id: walletId }).then(
            balanceResponse => {
              let balance = balanceResponse.data.balance.available_balance;
              ost_token.get({}).then(
                token => {
                  pricePoint = token.data.price_points.OST.USD;
                  let balanceUSD = balance * pricePoint;
                  // console.log(pricePoint);
                  // console.log(balanceUSD);
                  res.send({
                    user,
                    transactions,
                    balance,
                    upVotes,
                    balanceUSD
                  });
                },
                e => {
                  res.status(400).send(`token error: ${JSON.stringify(e)}`);
                }
              );
            },
            e => {
              res.status(400).send(`balance error: ${JSON.stringify(e)}`);
            }
          );
        },
        e => {
          res.status(400).send(`history error: ${JSON.stringify(e)}`);
        }
      );
    },
    e => {
      res.status(400).send(`find error: ${JSON.stringify(e)}`);
    }
  );
});

app.patch("/users", (req, res) => {
  let action_id = req.body.action_id;
  let amount = req.body.amount;
  console.log(req.body.from);
  console.log(req.body.to);
  let fromEthAddress = req.body.from.toLowerCase();
  let toEthAddress = req.body.to.toLowerCase();
  let from;
  let to;
  // console.log(toEthAddress.toLowerCase());
  // console.log(fromEthAddress.toLowerCase());

  //Convert eth addresses into OST walletIDs
  User.find({ ethId: fromEthAddress })
    .then(userArray => {
      var user = userArray[0];
      from = user.walletId;
    })
    .catch(function(err) {
      console.log(to, from);
      console.log(err.err);
    })
    .then(
      () => {
        User.find({ ethId: toEthAddress })
          .then(userArray => {
            var user2 = userArray[0];
            to = user2.walletId;
          })
          .catch(function(err) {
            console.log(to, from);
            console.log(err.err);
          })

          .then(
            () => {
              if (typeof from == "undefined") {
                res.status(400).send(`User not found: ${fromEthAddress}`);
                return;
              }
              if (typeof to == "undefined") {
                res.status(400).send(`User not found: ${toEthAddress}`);
                return;
              }
              console.log("     ");
              console.log(
                `####################### ACTION CALL ############################`
              );
              console.log(
                `Action requested: ${action_id}, with amount: ${amount}`
              );
              console.log(`Ethereum addresses: from ${fromEthAddress} `);
              console.log(`to---> ${toEthAddress}`);
              console.log(`Converted to OST wallet Id: from ${from}`);
              console.log(`to---> ${to}`);
              // "Answer" and "Vote" actions have their 'amount' property already defined
              if (action_id != end_ActionId) {
                transactionService
                  .execute({
                    action_id: action_id,
                    from_user_id: from,
                    to_user_id: to,
                    currency: "BT"
                  })
                  .then(function(response) {
                    res.status(200).send(to);
                    console.log("Success!");
                  })
                  .catch(function(err) {
                    res.status(400).send(err.err);
                    console.log(action_id, to, from);
                    console.log(err.err);
                  });
              } else {
                // find the remaining token balance of the game to clear it out.
                let balance;
                ost_balance
                  .get({ id: from })
                  .then(balanceResponse => {
                    balance = balanceResponse.data.balance.available_balance;
                  })
                  .then(
                    () => {
                      // "End Game" action requires an 'amount.' wich is the game's remaining balance
                      transactionService
                        .execute({
                          action_id: action_id,
                          to_user_id: to,
                          from_user_id: from,
                          currency: "BT",
                          amount: balance
                        })
                        .then(function(res) {
                          console.log("Success!");
                          res.status(200).send(response);
                        })
                        .catch(function(err) {
                          console.log(to, from);
                          res.status(400).send(err.err);
                          console.log(err.err);
                        });
                    },
                    e => {
                      res
                        .status(400)
                        .send(`execution endGame error: ${JSON.stringify(e)}`);
                    }
                  );
              }
            },
            e => {
              res
                .status(400)
                .send(
                  `execution vote/answer action error: ${JSON.stringify(e)}`
                );
            }
          );
      },
      e => {
        res.status(400).send(e);
      }
    );
});

app.listen(port, () => {
  console.log(
    `_______________________________________________________________`
  );
  console.log(` `);
  console.log(
    `################# OpenTrivia.io API Server ####################`
  );
  console.log(` `);
  console.log(`Started on port ${port}`);
  console.log(`______________________________________________________________`);
  console.log(` `);
});

//allows export app to server.test.js
module.exports = { app };
