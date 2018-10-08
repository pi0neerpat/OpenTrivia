const path = require("path");
const solc = require("solc");
//access to file system using node, community version w/ extra helpers
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const gamePath = path.resolve(__dirname, "contracts", "Game.sol");
const stringPath = path.resolve(__dirname, "contracts", "strings.sol");
const source = fs.readFileSync(gamePath, "utf8");

var input = {
  "Game.sol": fs.readFileSync(gamePath, "utf8"),
  "strings.sol": fs.readFileSync(stringPath, "utf8")
};

const output = solc.compile({ sources: input }, 1).contracts;
console.log(output);

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(
      buildPath,
      contract.replace("Game.sol:", "").replace("strings.sol:", "") + ".json"
    ),
    output[contract]
    //Pulling off the contract
  );
}
