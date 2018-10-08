import React, { Component } from "react";
import { Grid, Divider, Table, Header } from "semantic-ui-react";
import Blockies from "react-blockies";
import Game from "../ethereum/game";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ShowPlayer extends Component {
  render() {
    const { playerAddress, playerName, positive } = this.props;
    if (playerAddress == null) {
      return null;
    } else {
      return playerAddress.map((address, index) => (
        <Table.Row positive={positive}>
          <Table.Cell verticalAlign="center">
            <Blockies seed={address} size={5} scale={8} />
          </Table.Cell>
          <Table.Cell textAlign="left">
            <Header>
              {playerName[index]}
              <Header.Subheader>
                <a href={"https://ropsten.etherscan.io/address/" + address}>
                  {address.substring(0, 7)}...
                </a>
              </Header.Subheader>
            </Header>
          </Table.Cell>
        </Table.Row>
      ));
    }
  }
}

export default ShowPlayer;
