import React, { Component } from "react";
import Layout from "../components/Layout";
import Game from "../ethereum/game";
import {
  Grid,
  Card,
  Button,
  Divider,
  Segment,
  Header,
  Icon,
  Message
} from "semantic-ui-react";
import web3 from "../ethereum/web3";
import RegisterForm from "../components/RegisterForm";
import { Link } from "../routes";
import ShowPlayer from "../components/ShowPlayer";
import ShowWallet from "../components/ShowWallet";
const axios = require("axios");
import Blockies from "react-blockies";

class GameShow extends Component {
  static async getInitialProps() {
    // const game = Game("0x94bC90f8a7f79d7Ca88aD48435C6510A8F35944a");
    // const gameSummary = await game.methods.getSummary().call();

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const playerAddress = accounts[0];
    // const playerSummary = await game.methods.getPlayer(playerAddress).call();
    return {};
  }

  render() {
    return <Layout>Test page</Layout>;
  }
}

export default GameShow;
