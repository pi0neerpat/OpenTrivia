import React, { Component } from "react";
import {
  Button,
  Input,
  Form,
  Message,
  Card,
  Grid,
  Divider
} from "semantic-ui-react";
import Game from "../ethereum/game";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import ShowPlayer from "./ShowPlayer";

class RegisterForm extends Component {
  state = {
    name: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    const game = Game(this.props.gameAddress);
    const entryFee = await game.methods.entryFee().call();

    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.register(this.state.name).send({
        from: accounts[0],
        value: entryFee
      });
      // Router.pushRoute("/");
      //Router.replaceRoute(`/games/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };
  render() {
    const {
      playerName,
      playerAddress,
      entryFee,
      registered,
      hasStarted
    } = this.props;
    if (registered) {
      return (
        <div>
          <p1>You are registered</p1>
          <ShowPlayer
            playerAddress={[playerAddress]}
            playerName={[playerName]}
          />
        </div>
      );
    } else if (hasStarted) {
      return (
        <div>
          <p1>
            You are not registered.<br />The game has already started, so you
            cannot join.
          </p1>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Register</h3>
          <p1>
            <b>You are not registered.</b>
          </p1>
          <Grid.Row padded>
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
              <Button primary loading={this.state.loading}>
                Register!
              </Button>
            </Form>
          </Grid.Row>
        </div>
      );
    }
  }
}

export default RegisterForm;
