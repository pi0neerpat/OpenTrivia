import Web3 from "web3";
require("./config");

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
  console.log("MetaMask is connected to Ropsten.");
} else {
  const provider = new Web3.providers.HttpProvider(infuraURL);
  web3 = new Web3(provider);
  console.log("metamask is not running");
}

export default web3;
