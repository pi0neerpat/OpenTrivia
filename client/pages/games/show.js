import React, { Component } from "react";
import Layout from "../../components/Layout";
import Game from "../../ethereum/game";
import {
  Grid,
  Card,
  Button,
  Divider,
  Segment,
  Header,
  Icon,
  Message
} from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import RegisterForm from "../../components/RegisterForm";
import { Link } from "../../routes";
import ShowPlayer from "../../components/ShowPlayer";
import ShowWallet from "../../components/ShowWallet";
const axios = require("axios");
import Blockies from "react-blockies";

class GameShow extends Component {
  static async getInitialProps(props) {
    // getInitialProps gets its own props, which contains the URL address
    const game = Game(props.query.address);
    const gameSummary = await game.methods.getSummary().call();

    const accounts = await web3.eth.getAccounts();
    const playerAddress = accounts[0];
    const playerSummary = await game.methods.getPlayer(playerAddress).call();

    const gameVotes = await axios
      .get(
        // `localhost:3000/user/${props.query.address}`
        `https://tranquil-peak-32217.herokuapp.com/user/${props.query.address}`
      )
      .then(res => {
        return res.data.upVotes;
      })
      .catch(function(err) {
        console.log(err);
      });
    // console.log(accounts[0], props.query.address);
    // let address = "0x";
    // if (!playerSummary[1]) {
    //   address = "0x0";
    // }
    return {
      address: props.query.address,
      manager: gameSummary[0],
      description: gameSummary[1],
      entryFee: await web3.utils.fromWei(gameSummary[2]),
      grandPrize: await web3.utils.fromWei(gameSummary[3]),
      numPlayers: gameSummary[4],
      numRounds: gameSummary[5],
      gameStarted: gameSummary[6],
      gameEnded: gameSummary[7],
      playerSummary: playerSummary,
      playerAddress: playerAddress,
      gameVotes: gameVotes
    };
  }

  renderGame() {
    const {
      address,
      manager,
      description,
      entryFee,
      grandPrize,
      numPlayers,
      numRounds,
      gameStarted,
      gameEnded,
      gameVotes
    } = this.props;
    let isYellow = false;
    let isRed = false;
    let isGreen = true;
    let status = "";
    if (gameStarted && gameEnded) {
      isRed = true;
      status = "Complete";
    } else if (gameStarted) {
      isYellow = true;
      status = "In progress";
    } else {
      isGreen = true;
      status = "Open for new players";
    }

    return (
      <div>
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment>
              <Icon name="tasks" />
              {numRounds} rounds{" "}
            </Segment>
            <Segment>
              <Icon name="group" />
              {numPlayers} registered
            </Segment>
            <Segment compact>
              <Icon name="thumbs up" />
              {gameVotes} upvotes
            </Segment>
          </Segment.Group>
          <Segment>
            Game smart contract address:<a
              href={"https://ropsten.etherscan.io/address/" + address}
            >
              {address.substring(0, 17)}...
            </a>
            <br />
            Manager's address:{" "}
            <a href={"https://ropsten.etherscan.io/address/" + manager}>
              {manager.substring(0, 17)}...
            </a>
            <Message
              floating
              warning={isYellow}
              negative={isRed}
              positive={isGreen}
            >
              Satus: {status}
            </Message>
          </Segment>
        </Segment.Group>
      </div>
    );
  }

  render() {
    const {
      description,
      address,
      playerSummary,
      gameStarted,
      gameEnded,
      playerAddress,
      grandPrize,
      entryFee
    } = this.props;
    // console.log(JSON.stringify(playerSummary));
    // console.log(playerAddress);
    // console.log(address);
    return (
      <Layout>
        <Grid>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Grid columns={3}>
                <Grid.Column>
                  <Link route={`/`}>
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
                    <Blockies seed={address} size={5} scale={8} />
                    <Header.Content>
                      {description}
                      <Header.Subheader>
                        {grandPrize} ETH prize
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Link route={`/games/${address}/play`}>
                    <a>
                      <Button icon labelPosition="right" color="green">
                        Play<Icon name="right arrow" />
                      </Button>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid>
              {this.renderGame()}
            </Grid.Column>

            <Grid.Column width={4}>
              <Grid.Row>
                <div>
                  <RegisterForm
                    gameAddress={address}
                    registered={playerSummary[1]}
                    hasStarted={gameStarted} //{gameStarted}
                    hasEnded={gameEnded}
                    playerName={playerSummary[0]}
                    playerAddress={playerAddress}
                    entryFee={entryFee}
                  />
                </div>
              </Grid.Row>

              <Grid.Row>
                <Divider hidden />
                <ShowWallet gameAddress={address} />
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row />
        </Grid>
      </Layout>
    );
  }
}

export default GameShow;
