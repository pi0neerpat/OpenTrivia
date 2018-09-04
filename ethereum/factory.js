import web3 from "./web3";
import GameFactory from "./build/GameFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(GameFactory.interface),
  "0x766368f3FE910312007F003728075C8322185a87"
);

export default instance;
