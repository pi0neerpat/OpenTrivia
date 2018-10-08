import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  Input,
  Form,
  Button,
  Message,
  Grid,
  Header,
  Segment,
  Step,
  List
} from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
const axios = require("axios");
import Game from "../../ethereum/game";

class GameNew extends Component {
  state = {
    entryFee: "",
    description: "",
    questions: "",
    answers: "",
    errorMesssage: "",
    loading: false,
    walletSuccess: "",
    deploySuccess: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({
      loading: true,
      errorMessage: ""
    });
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

    this.setState({ loading: false, deploySuccess: "Success!" });
  };

  handleMakeWallet = async () => {
    // Get the deployed game's address
    const games = await factory.methods.getDeployedGames().call();
    const gameAddress = games[games.length - 1];
    const game = Game(gameAddress);
    const name = await game.methods.description().call();
    // console.log(gameAddress);
    axios
      // .post(`http://localhost:3001/users`, {
      .post(`https://tranquil-peak-32217.herokuapp.com/users`, {
        name: name,
        ethId: gameAddress
      })
      .then(res => {
        this.setState({ walletSuccess: "Success!" });
      })
      .catch(function(err) {});
  };

  render() {
    return (
      <Layout>
        <Header textAlign="center">
          Create a New Game<Header.Subheader>
            <i>*All fields are required</i>
          </Header.Subheader>
        </Header>

        <Header>Step 1.</Header>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Segment.Group>
            <Segment>
              <Header>General Info</Header>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Name</label>
                  <Input
                    value={this.state.description}
                    onChange={event =>
                      this.setState({ description: event.target.value })
                    }
                  />
                </Form.Field>
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
              </Form.Group>
            </Segment>
            <Segment>
              <Header>Questions & Answers</Header>
              <List bulleted>
                Separate each question and answer with a semi-colon ";" as shown
                in the example.<br />Capitalization and spelling count.
              </List>
              <Segment secondary>
                Questions:<b> "Is the Earth round?;Are robots people too?"</b>
                <br /> Answers:<b> "yes;no" </b>
              </Segment>

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
                  onChange={event =>
                    this.setState({ answers: event.target.value })
                  }
                />
              </Form.Field>

              <Message error header="Oops!" content={this.state.errorMessage} />
              <Message
                positive
                hidden={!this.state.loading}
                content="Please confirm the transaction in MetaMask. It may take a while for your transaction to process. Once the transaction is confirmed (wait for the MetaMask popup), you can continue to the next step."
              />
              <Button loading={this.state.loading} primary animated="fade">
                <Button.Content visible>Deploy game!</Button.Content>
                <Button.Content hidden>MetaMask running?</Button.Content>
              </Button>
              <Message compact success hidden={!this.state.deploySuccess}>
                Success!
              </Message>
            </Segment>
          </Segment.Group>
        </Form>
        <Header>Step 2.</Header>
        <Segment>
          <Header>
            Token Wallet{" "}
            <Header.Subheader>Powered by Simple Token</Header.Subheader>
          </Header>
          <p>
            After successful deployment to the Ethereum network, use this button
            to create a new token wallet for your game. Token wallets are used
            to upvote games.
          </p>
          <Button primary onClick={this.handleMakeWallet}>
            Create a token wallet
          </Button>
          <Message compact success hidden={!this.state.walletSuccess}>
            Success!
          </Message>
        </Segment>
      </Layout>
    );
  }
}

export default GameNew;
