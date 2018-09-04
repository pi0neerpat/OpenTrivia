import React, { Component } from "react";
import { Grid, Divider, Table, Button } from "semantic-ui-react";
import Blockies from "react-blockies";
import Game from "../ethereum/game";
import web3 from "../ethereum/web3";
import { Link } from "../routes";

class ShowGame extends Component {
  render() {
    const {
      address,
      name,
      gameStarted,
      gameEnded,
      gameVotes,
      entryFee,
      grandPrize,
      renderLabel
    } = this.props;

    if (renderLabel == false) {
      return null;
    }

    let positive = false;
    let negative = false;
    let warning = false;
    let status;
    if (gameStarted && gameEnded) {
      negative = true;
      status = "Ended";
    } else if (gameStarted) {
      warning = true;
      status = "In Progress";
    } else {
      positive = true;
      status = "Open";
    }

    return (
      <Link route={`/games/${address}`}>
        <Table.Row negative={negative} positive={positive} warning={warning}>
          <Table.Cell>
            <Blockies seed={address} size={5} scale={8} />
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{grandPrize}</Table.Cell>
          <Table.Cell>{gameVotes}</Table.Cell>
          <Table.Cell> {status}</Table.Cell>
          <Table.Cell>{entryFee}</Table.Cell>
        </Table.Row>
      </Link>
    );
  }
}

export default ShowGame;
