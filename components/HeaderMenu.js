import React, { Component } from "react";
import {
  Menu,
  Icon,
  Modal,
  Button,
  Image,
  Header,
  Step,
  Grid,
  List,
  Segment,
  Transition,
  Label,
  Popup
} from "semantic-ui-react";
import { Link } from "../routes";
import web3 from "../ethereum/web3";

class HeaderMenu extends Component {
  state = {
    visible: true,
    colorMetaMask: "red",
    messageMetaMask: "Check MetaMask",
    popupOpenMetaMask: false
  };

  checkMetamask = () => {
    //Check if MetaMask is installed & running
    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      web3.eth.getAccounts().then(accounts => {
        // Check if metamask is unlocked
        if (accounts.length > 0) {
          // console.log("MetaMask is unlocked");
          this.setState({
            colorMetaMask: "green",
            messageMetaMask: "Connected!"
          });
        } else {
          // console.log("MetaMask is locked");
          this.setState({
            colorMetaMask: "orange",
            messageMetaMask: "Oops! Please unlock your wallet."
          });
        }

        // Check if the correct network is selected
        web3.eth.net.getNetworkType((err, network) => {
          if (network !== "ropsten") {
            // console.log("wrong network");
            this.setState({
              colorMetaMask: "orange",
              messageMetaMask: `Oops! Please switch to Ropsten network.`
            });
          }
        });
      });
    } else {
      this.setState({
        popupOpenMetaMask: true
      });
    }
  };

  render() {
    const {
      colorMetaMask,
      messageMetaMask,
      visible,
      popupOpenMetaMask
    } = this.state;

    return (
      <Menu style={{ marginTop: "10px" }}>
        <Link route="/">
          <a className="item">OpenTrivia.io</a>
        </Link>

        <Modal
          image
          scrolling
          trigger={
            <Menu.Item>
              <Icon name="question circle" />
              How to play
            </Menu.Item>
          }
        >
          <Modal.Header>Guide</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid columns={3}>
                <Grid.Column>
                  <Segment icon>
                    <Header textAlign="center">
                      <Icon name="dollar sign" />Create or join a game
                    </Header>
                    <List bulleted>
                      <List.Item>
                        A new Ethereum smart contract is generated for each new
                        game.
                      </List.Item>
                      <List.Item>
                        The contract enforces the rules of the game, and holds
                        the prize money.
                      </List.Item>
                      <List.Item>
                        Players join by paying an entry fee to the contract.
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment icon>
                    <Header textAlign="center">
                      <Icon name="group" />Play
                    </Header>
                    <List bulleted>
                      <List.Item>
                        The game creator (human) decides when to start the game,
                        and when to end each round.
                      </List.Item>
                      <List.Item>
                        The contract (machine) checks each player's guess, and
                        keeps score.
                      </List.Item>
                      <List.Item>
                        Players can guess once per round. Each round may have
                        multiple winners.
                      </List.Item>
                      <List.Item>
                        There is only one right answer for each round. Spelling
                        and capitalization must be correct.
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment icon>
                    <Header textAlign="center">
                      <Icon name="trophy" />Win
                    </Header>
                    <List bulleted>
                      <List.Item>
                        Once finished, the total ETH in the contract is divided
                        among the players with the highest score.
                      </List.Item>
                      <List.Item>
                        To maintain security, a request must be made to
                        withdrawal any winnings.
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid>

              <Header>Tokens and Upvoting</Header>
              <p>
                The first time you register for a game, you recieve 10 tokens
                into a wallet that is linked to your Etherum address. These Open
                Trivia tokens are used to rate games via Upvotes. Additional
                tokens are earned each time a guess is submitted in a game. For
                now, tokens cannot be exchanged outside of this application, and
                have no value.
              </p>
              <Header>About</Header>
              <p>
                Open Trivia is an experimental peer-to-peer trivia game built
                using the Ethereum main-chain for trust-less gaming, and the{" "}
                <a href="https://kit.ost.com/">OST KIT⍺</a> side-chain for
                micro-transactions. Thank you{" "}
                <a href="https://infura.io/">Infura</a> for providing acces to
                the Ethereum network. Read more about this project{" "}
                <a href="https://medium.com/@patluvsblockchain/double-blockchain-dapp-experiment-96f2ac12dc8d">
                  here
                </a>
              </p>
              <Header>Hire me!</Header>
              <p>
                Are you a software company in need of an enthusiastic and
                innovative developer?{" "}
                <a href="https://twitter.com/pi0neerpat">@pi0neerpat</a>
              </p>
              <h5>Because one blockchain just wasn’t enough!</h5>
              <p>
                <Link route="https://github.com/blockchainbuddha/OpenTrivia">
                  <a>
                    <Icon size="large" name="github" link />
                  </a>
                </Link>
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Menu.Menu position="right">
          <Popup
            open={popupOpenMetaMask}
            trigger={
              <Menu.Item disabled>
                <Transition animation="tada" duration={1400} visible={visible}>
                  <Image
                    wrapped
                    avatar
                    size="mini"
                    src={require("../assets/metamask-icon.png")}
                  />
                </Transition>
                <Button
                  icon
                  compact
                  basic
                  labelPosition="right"
                  onClick={this.checkMetamask}
                  color={colorMetaMask}
                >
                  <Icon name="redo alternate" />
                  {messageMetaMask}
                </Button>
              </Menu.Item>
            }
            content={
              <p>
                Woops! I couldn't find an Ethereum wallet running on your
                browser. Please enable it, or install a wallet if you don't have
                one yet.
                <a href="https://metamask.io/">
                  <Image
                    src={require("../assets/download-metamask-dark.png")}
                  />
                </a>
              </p>
            }
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
export default HeaderMenu;
