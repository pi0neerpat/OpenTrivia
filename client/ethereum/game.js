// module plugs into show.js page
import web3 from "./web3";
import Game from "./build/Game";

export default address => {
  return new web3.eth.Contract(JSON.parse(Game.interface), address);
};
