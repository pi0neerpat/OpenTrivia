import React, { Component } from "react";
import Layout from "../../components/Layout";
import RegisterForm from "../../components/RegisterForm";
import ShowPlayer from "../../components/ShowPlayer";
import ShowWallet from "../../components/ShowWallet";
import {
  Grid,
  List,
  Button,
  Table,
  Input,
  Message,
  Form,
  Card,
  Divider,
  Segment,
  Header,
  Icon,
  Label
} from "semantic-ui-react";
import { Link } from "../../routes";
import Blockies from "react-blockies";
import Game from "../../ethereum/game";
import web3 from "../../ethereum/web3";
const axios = require("axios");
import { Router } from "../../routes";

class GamePlay extends Component {
  state = {
    answer: "",
    errorMessage: "",
    loading: false
  };

  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const game = Game(props.query.address);
    const gameSummary = await game.methods.getSummary().call();
    const winnerAddressArray = gameSummary[9];
    const winnerNameArray = new Array();
    for (var i = 0; i < winnerAddressArray.length; i++) {
      let winner = await game.methods.getPlayer(winnerAddressArray[i]).call();
      winnerNameArray[i] = winner[0];
    }

    // console.log(`player address: ${accounts[0]}`);
    const playerSummary = await game.methods.getPlayer(accounts[0]).call();
    console.log(accounts[0]);
    return {
      gameAddress: props.query.address,
      manager: gameSummary[0],
      description: gameSummary[1],
      entryFee: await web3.utils.fromWei(gameSummary[2]),
      grandPrize: await web3.utils.fromWei(gameSummary[3]),
      numPlayers: gameSummary[4],
      numRounds: gameSummary[5],
      hasStarted: gameSummary[6],
      hasEnded: gameSummary[7],
      highScore: gameSummary[8],
      winnerAddressArray: winnerAddressArray,
      winnerNameArray: winnerNameArray,
      currentRoundIndex: gameSummary[10],
      currentQuestion: gameSummary[11],
      playerSummary: playerSummary,
      registered: playerSummary[1],
      playerAddress: accounts[0],
      playerName: playerSummary[0]
    };
  }

  onSubmit = async event => {
    const game = Game(this.props.gameAddress);
    const accounts = await web3.eth.getAccounts();

    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    axios
      .patch(`https://tranquil-peak-32217.herokuapp.com/users`, {
        action_id: 40052,
        from: this.props.gameAddress,
        to: accounts[0],
        amount: 0
      })
      .then(res => {})
      .catch(function(err) {
        console.log(err);
      });

    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.guess(this.state.answer).send({
        from: accounts[0],
        value: null
      });
      Router.pushRoute("/");
      //Router.replaceRoute(`/games/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  onWithdraw = async event => {
    const game = Game(this.props.gameAddress);
    const accounts = await web3.eth.getAccounts();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.withdrawPrize().send({
        from: accounts[0],
        value: null
      });
      Router.pushRoute("/");
      //Router.replaceRoute(`/games/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  onStartGame = async event => {
    const game = Game(this.props.gameAddress);
    const accounts = await web3.eth.getAccounts();

    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.startRound().send({
        from: accounts[0],
        value: null
      });
      Router.pushRoute("/");
      //Router.replaceRoute(`/games/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  onEndRound = async event => {
    const game = Game(this.props.gameAddress);
    const accounts = await web3.eth.getAccounts();

    event.preventDefault();
    this.setState({ errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.endRound().send({
        from: accounts[0],
        value: null
      });
      Router.pushRoute("/");
      // Router.replaceRoute(`/games/${this.props.gameAddress}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  renderSidebar() {
    return (
      <div>
        {this.renderDetails()}
        {this.renderScoreboard()}
        <ShowWallet />
      </div>
    );
  }

  renderDetails() {
    const {
      numPlayers,
      numRounds,
      currentRoundIndex,
      hasStarted,
      hasEnded
    } = this.props;
    let isYellow = false;
    let isRed = false;
    let isGreen = true;
    let status = "";
    if (hasStarted && hasEnded) {
      isRed = true;
      status = "Complete";
    } else if (hasStarted) {
      isYellow = true;
      status = "In progress";
    } else {
      isGreen = true;
      status = "Waiting to start";
    }
    return (
      <Segment.Group>
        <Segment
          secondary
          as={Message}
          warning={isYellow}
          negative={isRed}
          positive={isGreen}
        >
          {status}
        </Segment>
        <Segment secondary>
          <p>
            <Icon name="tasks" />
            Round {currentRoundIndex} of {numRounds}
          </p>
          <p>
            <Icon name="group" />
            {numPlayers} registered
          </p>
        </Segment>
      </Segment.Group>
    );
  }

  renderScoreboard() {
    const {
      winnerNameArray,
      winnerAddressArray,
      highScore,
      numPlayers
    } = this.props;

    if (winnerAddressArray.length) {
      return (
        <Segment textAlign="center">
          <Header as="h4">
            <Icon name="trophy" />
            Top score: {highScore}
          </Header>
          <Table basic="very" compact>
            <Table.Header>
              <Table.HeaderCell textAlign="center" colSpan="2">
                Winning players
              </Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <ShowPlayer
                playerAddress={winnerAddressArray}
                playerName={winnerNameArray}
              />
            </Table.Body>
          </Table>
        </Segment>
      );
    } else {
      return (
        <Segment textAlign="center">
          <h3>
            <Icon name="trophy" />
            Top score: 0
          </h3>
          No winners
        </Segment>
      );
    }
  }

  renderCurrentPlayer() {
    const {
      playerSummary,
      playerAddress,
      gameAddress,
      hasStarted,
      entryFee
    } = this.props;
    return (
      <Grid textAlign="center">
        <Grid.Row>
          <Header inverted>
            <Icon name="group" />
            <Header.Subheader>Player</Header.Subheader>
          </Header>
        </Grid.Row>
        <Table basic="very" compact>
          <Table.Body inverted>
            <ShowPlayer
              playerAddress={[playerAddress]}
              playerName={[playerSummary[0]]}
            />
          </Table.Body>
        </Table>
        <p1>Your score: {playerSummary[2]}</p1>
      </Grid>
    );
  }

  renderQuestion() {
    const { currentQuestion, hasStarted, hasEnded } = this.props;
    if (hasStarted && !hasEnded) {
      return (
        <Segment fluid>
          <p>
            <i>Question:</i> <b>{currentQuestion}</b>
          </p>
        </Segment>
      );
    } else {
      return null;
    }
  }

  renderControls() {
    const { manager, playerAddress, playerName, registered } = this.props;
    // if (!registered) {
    //   return (
    //     <div>
    //       <Segment>You are not registered</Segment>
    //       {this.renderManagerControls()}
    //     </div>
    //   );
    // } else
    return (
      <div>
        <Segment>
          <Grid divided columns="equal">
            <Grid.Column floated="left" width={3} textAlign="center">
              <Header as="h3" textAlign="center">
                <Header.Content>Player controls</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column floated="left">
              {this.renderPlayerControls()}
            </Grid.Column>
          </Grid>
        </Segment>

        <Segment>
          <Grid divided columns="equal">
            <Grid.Column floated="left" width={3} textAlign="center">
              <Header as="h3" textAlign="center">
                <Header.Content>
                  Manager controls
                  <Header.Subheader>(restricted)</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column floated="left">
              {this.renderManagerControls()}
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }

  renderPlayerControls() {
    const { hasEnded, hasStarted, manager, playerAddress } = this.props;
    if (hasStarted && !hasEnded) {
      return (
        <div>
          <Form
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
            size="large"
          >
            <Form.Field>
              <label>Enter your answer:</label>
              <Input
                size="medium"
                placeholder="answer"
                disabled={hasEnded || !hasStarted}
                value={this.state.answer}
                onChange={event =>
                  this.setState({ answer: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading={this.state.loading} disabled={hasEnded}>
              Guess!
            </Button>
          </Form>
        </div>
      );
    } else if (hasEnded) {
      return (
        <Button
          animated="fade"
          loading={this.state.loading}
          color="green"
          onClick={this.onWithdraw}
        >
          <Button.Content visible>Withdraw prize</Button.Content>
          <Button.Content hidden>(winners only)</Button.Content>
        </Button>
      );
    } else {
      return <p>Waiting for the game to start...</p>;
    }
  }

  renderManagerControls() {
    const { hasStarted, hasEnded } = this.props;
    if (!hasStarted) {
      return (
        <Button color="green" basic onClick={this.onStartGame}>
          Start the Game!
        </Button>
      );
    } else if (!hasEnded) {
      return (
        <Button color="blue" basic onClick={this.onEndRound}>
          Go to the next round!
        </Button>
      );
    } else {
      axios
        .patch(`https://tranquil-peak-32217.herokuapp.com/users`, {
          action_id: 40054,
          to: this.props.manager,
          from: this.props.gameAddress,
          amount: 0
        })
        .then(res => {})
        .catch(function(err) {
          console.log(err);
        });
      return (
        <p1>Game complete. Leftover tokens were returned to the manager.</p1>
      );
    }
  }

  render() {
    const { grandPrize, description, gameAddress } = this.props;
    return (
      <Layout>
        <Grid columns="equal">
          <Grid.Column>
            <Grid columns={3}>
              <Grid.Column>
                <Link route={`/games/${gameAddress}`}>
                  <a>
                    <Button icon labelPosition="left">
                      Back
                      <Icon name="left arrow" />
                    </Button>
                  </a>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" icon textAlign="center">
                  <Blockies seed={gameAddress} size={5} scale={8} />
                  <Header.Content>
                    {description}
                    <Header.Subheader>{grandPrize} ETH prize</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="right" />
            </Grid>
            {this.renderQuestion()}
            <Grid.Row>{this.renderControls()}</Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}>{this.renderSidebar()}</Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default GamePlay;
