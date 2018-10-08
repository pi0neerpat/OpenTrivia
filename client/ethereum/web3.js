import Web3 from "web3";

//window is global only inside the browser
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser, and has metamask
  //This rips out the provider from metamask, and plugs it into our local version of web3, instead of using the web3 from metamask
  // console.log("MetaMask is running. Checking network Id...");
  //
  // window.web3.version.getNetwork((err, netId) => {
  //   console.log(`Network Id: ${netId}`);
  //
  //   if (netId.toString() !== "3") {
  //     console.log(
  //       "MetaMask is on the wrong network. Now using Infura provider on Ropsten."
  //     );
  //     const provider = new Web3.providers.HttpProvider(
  //       "https://ropsten.infura.io/UkZfSHYlZUsRnBPYPjTO"
  //     );
  //     web3 = new Web3(provider);
  //   } else {
  web3 = new Web3(window.web3.currentProvider);
  console.log("MetaMask is connected to Ropsten.");
  //   }
  // });
} else {
  // If loaded not in browser, or if metakamask in not running...
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/UkZfSHYlZUsRnBPYPjTO"
  );
  web3 = new Web3(provider);
  console.log("metamask is not running");
}
//need error handling since web3 would be undefined
export default web3;
