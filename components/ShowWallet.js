import React, { Component } from "react";
import {
  Button,
  Grid,
  Divider,
  Header,
  Table,
  Segment,
  Icon
} from "semantic-ui-react";
import { Router } from "../routes";
import web3 from "../ethereum/web3";
const axios = require("axios");

class ShowWallet extends Component {
  state = {
    balance: 0,
    balanceUSD: 0,
    transactions: [],
    walletName: "",
    upvoteDisabled: true
  };

  renderRows() {
    const { transactions } = this.state;
    const { Row, Cell } = Table;
    return transactions.map((tx, index) => {
      let action;
      let sign;
      if (tx.action_id === 40052) {
        action = "Guessed";
        sign = "+";
      } else if (tx.action_id === 40053) {
        action = "Upvoted";
        sign = "-";
      }
      return (
        <Row>
          <Cell>
            {sign}
            {tx.amount} Tokens
          </Cell>
          <Cell textAlign="center">{action}</Cell>
        </Row>
      );
    });
  }

  handleLoad = async () => {
    const accounts = await web3.eth.getAccounts();
    const wallet = await axios
      .get(`http://localhost:3001/user/${accounts[0]}`)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(function(err) {
        console.log(err);
      });
    let disabled = true;
    if (wallet.balance > 6) {
      disabled = false;
    }
    this.setState({
      balance: wallet.balance,
      balanceUSD: wallet.balanceUSD,
      transactions: wallet.transactions,
      walletName: wallet.user.name,
      upvoteDisabled: disabled
    });
  };

  handleupVote = async () => {
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);
    await axios
      .patch(`http://localhost:3001/users`, {
        action_id: 40053,
        from: accounts[0].toLowerCase(),
        to: this.props.address.toLowerCase()
      })
      .then(res => {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err.response.data);
      });
  };

  render() {
    const { balance, balanceUSD, walletName, upvoteDisabled } = this.state;
    if (!walletName) {
      return (
        <Segment secondary textAlign="center">
          <Header>
            <Icon color="blue" name="hockey puck" />
            Tokens
          </Header>

          <Button animated="fade" onClick={this.handleLoad}>
            <Button.Content visible>
              Load wallet <Icon name="redo alternate" />
            </Button.Content>
            <Button.Content hidden>MetaMask running?</Button.Content>
          </Button>
        </Segment>
      );
    } else {
      return (
        <Segment float>
          <Header textAlign="center">
            <Icon color="blue" name="hockey puck" />
            Tokens
          </Header>

          <p>
            Name: <b>{walletName}</b>
            <br />
            Tokens: <b>{balance}</b>
            <br /> ${balanceUSD}
          </p>

          <Button
            compact
            icon
            disabled={upvoteDisabled}
            onClick={this.handleUpvote}
            labelPosition="right"
          >
            Upvote Game
            <Icon name="hand point up outline" />
          </Button>

          <Table>
            <Table.Header>
              <Table.HeaderCell textAlign="center" colSpan="2">
                Transaction History
              </Table.HeaderCell>
            </Table.Header>
            {this.renderRows()}
          </Table>
        </Segment>
      );
    }
  }
}

export default ShowWallet;
