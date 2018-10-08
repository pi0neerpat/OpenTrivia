const expect = require("expect");
const request = require("supertest");
const axios = require("axios");
const assert = require("assert");
const delay = require("delay");

// Actions
let answer_ActionId = "40052";
let vote_ActionId = "40053";
let end_ActionId = "40054";
////////////////////OST///////////////////////

let gameNames = [
  "Game of Chance",
  "Game of Luck",
  "Game of Death",
  "Game of Love"
];
let gameEthIds = ["610029294", "538576090", "557498886", "792866729"];
let playerNames = [
  "Mark",
  "Spencer"
  // "Tracy",
  // "Jeff",
  // "Samantha",
  // "Brittany",
  // "Martha",
  // "Kelso"
];
// let playerEthIds = [
//   "271246298",
//   "324473420",
//   "400111895",
//   "475669345",
//   "88876356",
//   "80839212",
//   "106209885",
//   "879661306"
// ];
let playerEthIds = [
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000)),
  JSON.stringify(Math.floor(Math.random() * 100000))
];

const prepare = async () => {
  // Create some games
  // for (let i = 0; i < gameNames.length; i++) {
  //   await delay(500);
  //   axios
  //     .post(`http://localhost:3001/users`, {
  //       name: gameNames[i],
  //       ethId: gameEthIds[i]
  //     })
  //     .then(res => {
  //       return res.data.customers;
  //     })
  //     .catch(function(err) {
  //       return [];
  //     });
  // }
  // Register players
  for (let i = 0; i < playerNames.length; i++) {
    await delay(500);
    axios
      .post(`http://localhost:3001/users`, {
        name: playerNames[i],
        ethId: playerEthIds[i]
      })
      .then(res => {
        return res.data.customers;
      })
      .catch(function(err) {
        return [];
      });
  }
};

const getBalance = async () => {
  // vote for a game

  for (let i = 0; i < playerNames.length; i++) {
    await delay(500);
    // console.log(playerEthIds[i]);
    axios
      .get(`http://localhost:3001/user/${playerEthIds[i]}`)
      .then(res => {
        console.log(`User balance: ${res.data.balance}`);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

const vote = async () => {
  for (let i = 0; i < playerNames.length; i++) {
    await delay(500);
    axios
      .patch(`http://localhost:3001/users`, {
        action_id: 40053,
        from: playerEthIds[i],
        to: gameEthIds[0]
      })
      .then(res => {})
      .catch(function(err) {
        console.log(err);
      });
  }
};

const answer = async () => {
  //answer on each game
  for (let i = 0; i < playerNames.length; i++) {
    for (let j = 0; j < gameNames.length; j++) {
      await delay(500);
      axios
        .patch(`http://localhost:3001/users`, {
          action_id: 40052,
          from: playerEthIds[i],
          to: gameEthIds[j],
          amount: 0
        })
        .then(res => {})
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};

const end = async () => {
  //End some games
  for (let i = 0; i < gameNames.length; i++) {
    await delay(500);
    axios
      .patch(`http://localhost:3001/users`, {
        action_id: 40054,
        to: playerEthIds[i],
        from: gameEthIds[i],
        amount: 0
      })
      .then(res => {})
      .catch(function(err) {
        console.log(err);
      });
  }
};

// Run it multiple times
const GO = async () => {
  prepare();
  await delay(3000);
  vote();
  await delay(2000);
  answer();
  await delay(2000);
  end();
  playerEthIds = [
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000))
  ];
  prepare();
  await delay(20000);
  vote();
  await delay(2000);
  answer();
  await delay(2000);
  end();
  playerEthIds = [
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000))
  ];
  prepare();
  await delay(20000);
  vote();
  await delay(2000);
  // answer();
  await delay(2000);
  end();
  playerEthIds = [
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000))
  ];
  prepare();
  await delay(20000);
  vote();
  await delay(2000);
  answer();
  await delay(2000);
  end();
  playerEthIds = [
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000))
  ];
  prepare();
  await delay(20000);
  vote();
  await delay(2000);
  // answer();
  await delay(2000);
  end();
  playerEthIds = [
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000)),
    JSON.stringify(Math.floor(Math.random() * 100000))
  ];
  prepare();
  await delay(20000);
  vote();
  await delay(2000);
  // answer();
  await delay(2000);
  end();
};

GO();
