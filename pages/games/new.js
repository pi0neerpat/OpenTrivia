import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Input, Form, Button, Message, Grid } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
const axios = require("axios");

class GameNew extends Component {
  state = {
    entryFee: "",
    description: "",
    questions: "",
    answers: "",
    errorMesssage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createGame(
          web3.utils.toWei(this.state.entryFee),
          this.state.description,
          this.state.questions,
          this.state.answers
        )
        .send({
          from: accounts[0]
        });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  handleMakeWallet = async () => {
    // Get the deployed game's address
    const games = await factory.methods.getDeployedGames().call();
    const gameAddress = games[games.length - 1];
    console.log(games);
    console.log(gameAddress);
    axios
      .post(`http://localhost:3001/users`, {
        name: this.state.description,
        ethId: gameAddress
      })
      .then(res => {
        return res.data.customers;
      })
      .catch(function(err) {
        return [];
      });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Game</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Entry Fee</label>
            <Input
              label="Eth"
              labelPosition="right"
              value={this.state.entryFee}
              onChange={event =>
                this.setState({
                  entryFee: event.target.value
                })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Questions</label>
            <Input
              value={this.state.questions}
              onChange={event =>
                this.setState({ questions: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Answers</label>
            <Input
              value={this.state.answers}
              onChange={event => this.setState({ answers: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
        <Grid.Row>
          <Button onClick={this.handleMakeWallet}>Create a token wallet</Button>
        </Grid.Row>
      </Layout>
    );
  }
}

export default GameNew;
