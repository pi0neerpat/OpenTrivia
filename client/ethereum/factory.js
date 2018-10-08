import web3 from "./web3";
import GameFactory from "./build/GameFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(GameFactory.interface),
  "0x94bC90f8a7f79d7Ca88aD48435C6510A8F35944a"
);

export default instance;
