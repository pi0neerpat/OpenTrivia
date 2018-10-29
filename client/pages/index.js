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
  Menu,
  Icon,
  Transition
} from "semantic-ui-react";
import Layout from "../components/Layout";
import ShowGame from "../components/ShowGame";
import { Link } from "../routes";
import Blockies from "react-blockies";
const axios = require("axios");
import web3 from "../ethereum/web3";

class GameIndex extends Component {
  state = {
    gameRenderLabel: [],
    showOpen: true,
    showInProgress: true,
    showEnded: true
  };

  static async getInitialProps() {
    let totalPrizes = 0;
    var gameNames = [];
    var gameStarted = [];
    var gameVotes = [];
    var gameFees = [];
    var gamePrizes = [];
    var gameEnded = [];
    var gameAddresses = ["0x"];

    const gameAddresses = await factory.methods
      .getDeployedGames()
      .call()
      .catch(err => console.log(err));

    if (gameAddresses !== undefined && gameAddresses.length > 0) {
      for (var i = 0; i < gameAddresses.length; i++) {
        let game = Game(gameAddresses[i]);
        let gameSummary = await game.methods.getSummary().call();
        gameNames[i] = gameSummary[1];
        gameStarted[i] = gameSummary[6];
        gameEnded[i] = gameSummary[7];
        gameFees[i] = await web3.utils.fromWei(gameSummary[2]);
        gamePrizes[i] = await web3.utils.fromWei(gameSummary[3]);
        totalPrizes += Number(gamePrizes[i]);
        gameVotes[i] = await axios
          // .get(`localhost:3001/user/${games[i]}`)
          .get(
            `https://tranquil-peak-32217.herokuapp.com/user/${gameAddresses[i]}`
          )
          .then(res => {
            return res.data.upVotes;
          })
          .catch(function(err) {});
      }
    }

    return {
      gameAddresses,
      gameNames,
      gameStarted,
      gameEnded,
      gameVotes,
      gameFees,
      gamePrizes,
      gameEnded,
      totalPrizes
    };
  }

  renderGames() {
    const {
      gameAddresses,
      gameNames,
      gameStarted,
      gameVotes,
      gameFees,
      gamePrizes,
      gameEnded
    } = this.props;

    return gameAddresses.map((game, index) => {
      return (
        <ShowGame
          key={index}
          address={game}
          name={gameNames[index]}
          gameStarted={gameStarted[index]}
          gameVotes={gameVotes[index]}
          grandPrize={gamePrizes[index]}
          entryFee={gameFees[index]}
          renderLabel={this.state.gameRenderLabel[index]}
          gameEnded={gameEnded[index]}
        />
      );
    });
  }

  handleFilter = (e, { value }) => {
    const { gameAddresses, gameStarted, gameEnded } = this.props;
    const { showOpen, showInProgress, showEnded } = this.state;
    let newShowOpen = showOpen;
    let newShowInProgress = showInProgress;
    let newShowEnded = showEnded;
    if (value === "Open") newShowOpen = !showOpen;
    if (value === "In Progress") newShowInProgress = !showInProgress;
    if (value === "Ended") newShowEnded = !showEnded;

    var renderLabelArray = new Array();
    gameAddresses.map((game, index) => {
      if (newShowOpen === true && gameStarted[index] === false) {
        renderLabelArray[index] = true;
      } else if (
        newShowInProgress === true &&
        gameStarted[index] === true &&
        gameEnded[index] === false
      ) {
        renderLabelArray[index] = true;
      } else if (newShowEnded === true && gameEnded[index] === true) {
        renderLabelArray[index] = true;
      } else renderLabelArray[index] = false;
    });
    this.setState({
      gameRenderLabel: renderLabelArray,
      showOpen: newShowOpen,
      showInProgress: newShowInProgress,
      showEnded: newShowEnded
    });
  };

  renderControls() {
    return (
      <Menu secondary>
        <Menu.Item header>Filter:</Menu.Item>
        <Menu.Item>
          <Checkbox
            toggle
            label="Open"
            defaultChecked
            value="Open"
            onChange={this.handleFilter}
          />
        </Menu.Item>
        <Menu.Item>
          <Checkbox
            toggle
            label="In Progress"
            defaultChecked
            value="In Progress"
            onChange={this.handleFilter}
          />
        </Menu.Item>
        <Menu.Item>
          <Checkbox
            toggle
            label="Ended"
            defaultChecked
            value="Ended"
            onChange={this.handleFilter}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Link route="games/new">
            <Button color="blue">
              <Icon name="add" />
              Create Game
            </Button>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }

  render() {
    return (
      <Layout>
        <div>
          <Header as="h3" textAlign="center">
            <Icon.Group size="big">
              <Icon name="trophy" />
              <Icon corner name="question" />
            </Icon.Group>
            <Header.Content>
              Open Trivia
              <Header.Subheader>
                {this.props.totalPrizes} ETH in Prizes
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Divider />
          {this.renderControls()}

          <Table singleLine selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Current Prize</Table.HeaderCell>
                <Table.HeaderCell>UpVotes</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>EntryFee</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.renderGames()}</Table.Body>
          </Table>
        </div>
      </Layout>
    );
  }
}

export default GameIndex;
