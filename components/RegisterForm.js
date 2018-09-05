import React, { Component } from "react";
import {
  Button,
  Input,
  Form,
  Message,
  Card,
  Grid,
  Divider,
  Segment,
  Header,
  Table
} from "semantic-ui-react";
import Game from "../ethereum/game";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import ShowPlayer from "./ShowPlayer";
const axios = require("axios");

class RegisterForm extends Component {
  state = {
    name: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    const game = Game(this.props.gameAddress);
    const entryFee = await game.methods.entryFee().call();

    // event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    // console.log(`This name: ${this.state.name}`);
    const accounts = await web3.eth.getAccounts();
    axios
      .post(`https://tranquil-peak-32217.herokuapp.com/users`, {
        name: this.state.name,
        ethId: accounts[0]
      })
      .then(res => {
        return res.data.customers;
      })
      .catch(function(err) {
        return [];
      });
    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.register(this.state.name).send({
        from: accounts[0],
        value: entryFee
      });
      // Router.pushRoute("/");
      Router.replaceRoute(`/games/${this.props.gameAddress}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };
  render() {
    const {
      playerName,
      playerAddress,
      registered,
      hasStarted,
      hasEnded,
      entryFee
    } = this.props;
    // console.log(registered);
    if (registered) {
      return (
        <Segment.Group>
          <Segment>
            <Header textAlign="center">
              Registration
              <Header.Subheader>Entry fee: {entryFee} ETH</Header.Subheader>
            </Header>
          </Segment>
          <Segment color="green">
            <p1>You are registered</p1>
            <Table basic="very" compact>
              <Table.Body>
                <ShowPlayer
                  playerAddress={[playerAddress]}
                  playerName={[playerName]}
                />
              </Table.Body>
            </Table>
          </Segment>
        </Segment.Group>
      );
    } else if (hasStarted) {
      let status = "has already started";
      if (hasEnded) status = "has ended";
      return (
        <Segment.Group>
          <Segment>
            <Header textAlign="center">
              Registration
              <Header.Subheader>Entry fee: {entryFee} ETH</Header.Subheader>
            </Header>
          </Segment>

          <Segment color="red">
            <p>
              You are not registered. The game {status}, so you cannot join.
            </p>
          </Segment>
        </Segment.Group>
      );
    } else {
      return (
        <Segment.Group>
          <Segment>
            <Header textAlign="center">
              Registration
              <Header.Subheader>Entry fee: {entryFee} ETH</Header.Subheader>
            </Header>
          </Segment>
          <Segment color="green">
            <p1>You are not yet registered</p1>

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Enter your name:</label>
                <Input
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button
                fluid
                primary
                animated="fade"
                loading={this.state.loading}
              >
                <Button.Content visible>Register!</Button.Content>
                <Button.Content hidden>MetaMask running?</Button.Content>
              </Button>
            </Form>
          </Segment>
        </Segment.Group>
      );
    }
  }
}

export default RegisterForm;
