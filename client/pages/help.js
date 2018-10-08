import React, { Component } from "react";
import factory from "../ethereum/factory";
import Game from "../ethereum/game";
import {
  Card,
  Button,
  Image,
  Grid,
  Checkbox,
  Segment,
  Divider,
  Header,
  Table,
  Icon
} from "semantic-ui-react";
import Layout from "../components/Layout";
import ShowGame from "../components/ShowGame";
import { Link } from "../routes";
import Blockies from "react-blockies";
const axios = require("axios");
import web3 from "../ethereum/web3";

class HelpIndex extends Component {
  render() {
    return (
      <Layout>
        <div />
      </Layout>
    );
  }
}
export default HelpIndex;
