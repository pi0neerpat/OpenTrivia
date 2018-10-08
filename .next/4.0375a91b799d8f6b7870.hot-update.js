webpackHotUpdate(4,{

/***/ "./components/HeaderMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
var _jsxFileName = "/home/thisguy/repos/Open-Trivia/components/HeaderMenu.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var HeaderMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderMenu, _Component);

  function HeaderMenu() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HeaderMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HeaderMenu.__proto__ || Object.getPrototypeOf(HeaderMenu)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: true,
        colorMetaMask: "red",
        messageMetaMask: "Check your connection to Ropsten...",
        popupOpenMetaMask: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "checkMetamask", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        //Check if MetaMask is installed & running
        if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
          __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts().then(function (accounts) {
            // Check if metamask is unlocked
            if (accounts.length > 0) {
              // console.log("MetaMask is unlocked");
              _this.setState({
                colorMetaMask: "green",
                messageMetaMask: "Connected!"
              });
            } else {
              // console.log("MetaMask is locked");
              _this.setState({
                colorMetaMask: "orange",
                messageMetaMask: "Oops! Please unlock your wallet."
              });
            } // Check if the correct network is selected


            __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.net.getNetworkType(function (err, network) {
              if (network !== "ropsten") {
                // console.log("wrong network");
                _this.setState({
                  colorMetaMask: "orange",
                  messageMetaMask: "Oops! Please switch to Ropsten network."
                });
              }
            });
          });
        } else {
          _this.setState({
            popupOpenMetaMask: true
          });
        }
      }
    }), _temp));
  }

  _createClass(HeaderMenu, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          colorMetaMask = _state.colorMetaMask,
          messageMetaMask = _state.messageMetaMask,
          visible = _state.visible,
          popupOpenMetaMask = _state.popupOpenMetaMask;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Menu */], {
        style: {
          marginTop: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Menu */].Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "OpenTrivia.io")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["l" /* Modal */], {
        image: true,
        scrolling: true,
        trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Menu */].Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["g" /* Icon */], {
          name: "question circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }), "How to play"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["l" /* Modal */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Guide"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["l" /* Modal */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["l" /* Modal */].Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */], {
        columns: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["n" /* Segment */], {
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["g" /* Icon */], {
        name: "dollar sign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), "Create or join a game"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */], {
        bulleted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "A new Ethereum smart contract is generated for each new game."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "The contract enforces the rules of the game, and holds the prize money."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Players join by paying an entry fee to the contract.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["n" /* Segment */], {
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["g" /* Icon */], {
        name: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), "Play"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */], {
        bulleted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "The game creator (human) decides when to start the game, and when to end each round."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "The contract (machine) checks each player's guess, and keeps score."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Players can guess once per round. Each round may have multiple winners."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "There is only one right answer for each round. Spelling and capitalization must be correct.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["n" /* Segment */], {
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["g" /* Icon */], {
        name: "trophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), "Win"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */], {
        bulleted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Once finished, the total ETH in the contract is divided among the players with the highest score."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["i" /* List */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "To maintain security, a request must be made to withdrawal any winnings."))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Message */], {
        warning: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */], {
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "Note: "), "If something is not working, check your MetaMask connection by clicking the button in the top-right."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Grid */].Column, {
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Image */] // size="small"
      , {
        src: __webpack_require__("./assets/network-check.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Tokens and Upvoting"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "The first time you register for a game, you recieve 10 tokens into a wallet that is linked to your Etherum address. These Open Trivia tokens are used to rate games via Upvotes. Additional tokens are earned each time a guess is submitted in a game. For now, tokens cannot be exchanged outside of this application, and have no value."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "New to Ethereum or blockchain?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["k" /* Message */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Note: "), "It will take time to understand this crazy new blockchain thing called Ethereum. It's worth it though! Who doesn't like a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "universal public computer?"), " Just remember,", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "blockchain is all about empowering the user."), " With this power, comes...", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "more"), " responsibility. And more work. This ain't no cakewalk, folks. Hang in there and it will eventually click."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "In order to access the Ethereum \"computer,\" you'll need to establish an identity. This is done using a wallet, which generates a new ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "address"), " completely unique to you. MetaMask is an open-source Ethereum wallet that you can add to your browser. Since this is your first time, don't worry about understanding everything the first time you create a wallet.", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Good cyber-hygiene takes practice. "), "Rest assured, your new wallet will not hold anything of value. Later, when you're more comfortable, you can reinstall MetaMask using your excellent cyber-hygiene and blockchain knowledge. For now, grab a wallet and meet back here.", " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://metamask.io/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Image */], {
        size: "small",
        src: __webpack_require__("./assets/download-metamask-dark.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, "Now that MetaMask is installed and you have your identity, or", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "address"), ", we need to top-up our account with some funds to use this public computer. First, switch to the Ropsten network, and then paste your address into the", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://faucet.ropsten.be/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Ropsten Faucet"), " ", "to receive some Ropsten ETH. Once the transaction confirms, check your balance. You are now ready to use this application!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Open Trivia is an experimental peer-to-peer trivia game built using the Ethereum main-chain for trust-less gaming, and the", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://kit.ost.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "OST KIT\u237A"), " side-chain for micro-transactions. Thank you", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://infura.io/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "Infura"), " for providing acces to the Ethereum network. Read more about this project", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://medium.com/@patluvsblockchain/double-blockchain-dapp-experiment-96f2ac12dc8d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "here")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Hire me!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, "Are you a software company in need of an enthusiastic and innovative developer?", " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://twitter.com/pi0neerpat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "@pi0neerpat")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "Nerd stuff"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, "Github:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "https://github.com/blockchainbuddha/OpenTrivia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["g" /* Icon */], {
        size: "large",
        name: "github",
        link: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "Because one blockchain just wasn\u2019t enough!"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Menu */].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["m" /* Popup */], {
        open: popupOpenMetaMask,
        trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["j" /* Menu */].Item, {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Image */], {
          wrapped: true,
          avatar: true,
          size: "mini",
          src: __webpack_require__("./assets/metamask-icon.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Button */] // icon
        , {
          compact: true,
          basic: true,
          onClick: this.checkMetamask,
          color: colorMetaMask,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, messageMetaMask)),
        content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        }, "Uh-oh! I couldn't find an Ethereum wallet running on your browser.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "https://metamask.io/",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Image */], {
          src: __webpack_require__("./assets/download-metamask-dark.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })));
    }
  }]);

  return HeaderMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeaderMenu);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderMenu__ = __webpack_require__("./components/HeaderMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/thisguy/repos/Open-Trivia/components/Layout.js";


 //Head places any tags into head tag of HTML document
//Place SEO tags in the HEAD!!!!


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Container */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__HeaderMenu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), props.children);
});

/***/ }),

/***/ "./components/ShowGame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_blockies__ = __webpack_require__("./node_modules/react-blockies/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_blockies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_blockies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_game__ = __webpack_require__("./ethereum/game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _jsxFileName = "/home/thisguy/repos/Open-Trivia/components/ShowGame.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ShowGame =
/*#__PURE__*/
function (_Component) {
  _inherits(ShowGame, _Component);

  function ShowGame() {
    _classCallCheck(this, ShowGame);

    return _possibleConstructorReturn(this, (ShowGame.__proto__ || Object.getPrototypeOf(ShowGame)).apply(this, arguments));
  }

  _createClass(ShowGame, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          address = _props.address,
          name = _props.name,
          gameStarted = _props.gameStarted,
          gameEnded = _props.gameEnded,
          gameVotes = _props.gameVotes,
          entryFee = _props.entryFee,
          grandPrize = _props.grandPrize,
          renderLabel = _props.renderLabel;

      if (renderLabel == false) {
        return null;
      }

      var positive = false;
      var negative = false;
      var warning = false;
      var status;

      if (gameStarted && gameEnded) {
        negative = true;
        status = "Ended";
      } else if (gameStarted) {
        warning = true;
        status = "In Progress";
      } else {
        positive = true;
        status = "Open";
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: "/games/".concat(address),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Row, {
        negative: negative,
        positive: positive,
        warning: warning,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_blockies___default.a, {
        seed: address,
        size: 5,
        scale: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, grandPrize), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, gameVotes), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, " ", status), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["o" /* Table */].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, entryFee)));
    }
  }]);

  return ShowGame;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ShowGame);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__("./node_modules/lodash/invoke.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without__ = __webpack_require__("./node_modules/lodash/without.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__("./node_modules/semantic-ui-react/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FormButton__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FormCheckbox__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormCheckbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FormDropdown__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__FormField__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormField.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__FormGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__FormInput__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FormRadio__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormRadio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FormSelect__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormSelect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__FormTextArea__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormTextArea.js");























/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see Visibility
 */

var Form =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _temp, _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(_this, (_temp = _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Form)).call.apply(_getPrototypeOf2, [this].concat(_args))), __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSubmit", function (e) {
      var action = _this.props.action; // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
      // method.

      if (typeof action !== 'string') __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(e, 'preventDefault');

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default.a.apply(void 0, [_this.props, 'onSubmit', e, _this.props].concat(args));
    }), _temp));
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          children = _this$props.children,
          className = _this$props.className,
          error = _this$props.error,
          inverted = _this$props.inverted,
          loading = _this$props.loading,
          reply = _this$props.reply,
          size = _this$props.size,
          success = _this$props.success,
          unstackable = _this$props.unstackable,
          warning = _this$props.warning,
          widths = _this$props.widths;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(reply, 'reply'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(success, 'success'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["G" /* useWidthProp */])(widths, null, true), 'form', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(Form, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(Form, this.props);
      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        action: action,
        className: classes,
        onSubmit: this.handleSubmit
      }), children);
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "defaultProps", {
  as: 'form'
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Field", __WEBPACK_IMPORTED_MODULE_17__FormField__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Button", __WEBPACK_IMPORTED_MODULE_14__FormButton__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Checkbox", __WEBPACK_IMPORTED_MODULE_15__FormCheckbox__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Dropdown", __WEBPACK_IMPORTED_MODULE_16__FormDropdown__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Group", __WEBPACK_IMPORTED_MODULE_18__FormGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Input", __WEBPACK_IMPORTED_MODULE_19__FormInput__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Radio", __WEBPACK_IMPORTED_MODULE_20__FormRadio__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Select", __WEBPACK_IMPORTED_MODULE_21__FormSelect__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "TextArea", __WEBPACK_IMPORTED_MODULE_22__FormTextArea__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "handledProps", ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"]);

Form.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** The HTML form action */
  action: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Automatically show any error Message children. */
  error: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can have its color inverted for contrast. */
  inverted: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Automatically show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** The HTML form submit handler. */
  onSubmit: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_9_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Automatically show any warning Message children. */
  warning: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['equal'])
} : {};
/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/collections/Form/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js");
/* unused harmony reexport default */



/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addons_Confirm__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Confirm/index.js");
/* unused harmony reexport Confirm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addons_MountNode__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/MountNode/index.js");
/* unused harmony reexport MountNode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addons_Pagination__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Pagination/index.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addons_Pagination_PaginationItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Pagination/PaginationItem.js");
/* unused harmony reexport PaginationItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addons_Portal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Portal/index.js");
/* unused harmony reexport Portal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addons_Portal_PortalInner__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js");
/* unused harmony reexport PortalInner */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addons_Radio__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Radio/index.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addons_Ref__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Ref/index.js");
/* unused harmony reexport Ref */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addons_Responsive__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Responsive/index.js");
/* unused harmony reexport Responsive */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addons_Select__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/Select/index.js");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addons_TextArea__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/TextArea/index.js");
/* unused harmony reexport TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addons_TransitionablePortal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/TransitionablePortal/index.js");
/* unused harmony reexport TransitionablePortal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__behaviors_Visibility__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/behaviors/Visibility/index.js");
/* unused harmony reexport Visibility */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collections_Breadcrumb__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/index.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__collections_Breadcrumb_BreadcrumbDivider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbDivider.js");
/* unused harmony reexport BreadcrumbDivider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__collections_Breadcrumb_BreadcrumbSection__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbSection.js");
/* unused harmony reexport BreadcrumbSection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__collections_Form__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/index.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collections_Form_FormButton__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js");
/* unused harmony reexport FormButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__collections_Form_FormCheckbox__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormCheckbox.js");
/* unused harmony reexport FormCheckbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__collections_Form_FormDropdown__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormDropdown.js");
/* unused harmony reexport FormDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__collections_Form_FormField__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormField.js");
/* unused harmony reexport FormField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__collections_Form_FormGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormGroup.js");
/* unused harmony reexport FormGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__collections_Form_FormInput__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js");
/* unused harmony reexport FormInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__collections_Form_FormRadio__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormRadio.js");
/* unused harmony reexport FormRadio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__collections_Form_FormSelect__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormSelect.js");
/* unused harmony reexport FormSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__collections_Form_FormTextArea__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/FormTextArea.js");
/* unused harmony reexport FormTextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__collections_Grid__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_26__collections_Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__collections_Grid_GridColumn__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js");
/* unused harmony reexport GridColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__collections_Grid_GridRow__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js");
/* unused harmony reexport GridRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__collections_Menu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_29__collections_Menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__collections_Menu_MenuHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js");
/* unused harmony reexport MenuHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__collections_Menu_MenuItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__collections_Menu_MenuMenu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js");
/* unused harmony reexport MenuMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__collections_Message__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_33__collections_Message__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__collections_Message_MessageContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageContent.js");
/* unused harmony reexport MessageContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__collections_Message_MessageHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageHeader.js");
/* unused harmony reexport MessageHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__collections_Message_MessageItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageItem.js");
/* unused harmony reexport MessageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__collections_Message_MessageList__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js");
/* unused harmony reexport MessageList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__collections_Table__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_38__collections_Table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__collections_Table_TableBody__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js");
/* unused harmony reexport TableBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__collections_Table_TableCell__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js");
/* unused harmony reexport TableCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__collections_Table_TableFooter__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js");
/* unused harmony reexport TableFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__collections_Table_TableHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js");
/* unused harmony reexport TableHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__collections_Table_TableHeaderCell__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js");
/* unused harmony reexport TableHeaderCell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__collections_Table_TableRow__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js");
/* unused harmony reexport TableRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__elements_Button_Button__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_45__elements_Button_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__elements_Button_ButtonContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js");
/* unused harmony reexport ButtonContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__elements_Button_ButtonGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js");
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__elements_Button_ButtonOr__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js");
/* unused harmony reexport ButtonOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__elements_Container__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_49__elements_Container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__elements_Divider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Divider/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_50__elements_Divider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__elements_Flag__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Flag/index.js");
/* unused harmony reexport Flag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__elements_Header__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_52__elements_Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__elements_Header_HeaderContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js");
/* unused harmony reexport HeaderContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__elements_Header_HeaderSubheader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js");
/* unused harmony reexport HeaderSubheader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__elements_Icon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_55__elements_Icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__elements_Icon_IconGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js");
/* unused harmony reexport IconGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__elements_Image__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_57__elements_Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__elements_Image_ImageGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js");
/* unused harmony reexport ImageGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__elements_Input__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Input/index.js");
/* unused harmony reexport Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__elements_Label__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/index.js");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__elements_Label_LabelDetail__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js");
/* unused harmony reexport LabelDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__elements_Label_LabelGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js");
/* unused harmony reexport LabelGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__elements_List__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_63__elements_List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__elements_List_ListContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js");
/* unused harmony reexport ListContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__elements_List_ListDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListDescription.js");
/* unused harmony reexport ListDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__elements_List_ListHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListHeader.js");
/* unused harmony reexport ListHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__elements_List_ListIcon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListIcon.js");
/* unused harmony reexport ListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__elements_List_ListItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListItem.js");
/* unused harmony reexport ListItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__elements_List_ListList__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/ListList.js");
/* unused harmony reexport ListList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__elements_Loader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Loader/index.js");
/* unused harmony reexport Loader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__elements_Rail__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Rail/index.js");
/* unused harmony reexport Rail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__elements_Reveal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Reveal/index.js");
/* unused harmony reexport Reveal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__elements_Reveal_RevealContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Reveal/RevealContent.js");
/* unused harmony reexport RevealContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__elements_Segment__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_74__elements_Segment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__elements_Segment_SegmentGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentGroup.js");
/* unused harmony reexport SegmentGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__elements_Step__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/index.js");
/* unused harmony reexport Step */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__elements_Step_StepContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepContent.js");
/* unused harmony reexport StepContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__elements_Step_StepDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepDescription.js");
/* unused harmony reexport StepDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__elements_Step_StepGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepGroup.js");
/* unused harmony reexport StepGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__elements_Step_StepTitle__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Step/StepTitle.js");
/* unused harmony reexport StepTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__modules_Accordion_Accordion__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js");
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__modules_Accordion_AccordionAccordion__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionAccordion.js");
/* unused harmony reexport AccordionAccordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__modules_Accordion_AccordionContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionContent.js");
/* unused harmony reexport AccordionContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__modules_Accordion_AccordionPanel__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionPanel.js");
/* unused harmony reexport AccordionPanel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__modules_Accordion_AccordionTitle__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionTitle.js");
/* unused harmony reexport AccordionTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__modules_Checkbox__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Checkbox/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_86__modules_Checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__modules_Dimmer__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dimmer/index.js");
/* unused harmony reexport Dimmer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__modules_Dimmer_DimmerDimmable__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js");
/* unused harmony reexport DimmerDimmable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__modules_Dimmer_DimmerInner__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js");
/* unused harmony reexport DimmerInner */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__modules_Dropdown__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/index.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__modules_Dropdown_DropdownDivider__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js");
/* unused harmony reexport DropdownDivider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__modules_Dropdown_DropdownHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js");
/* unused harmony reexport DropdownHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__modules_Dropdown_DropdownItem__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js");
/* unused harmony reexport DropdownItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__modules_Dropdown_DropdownMenu__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js");
/* unused harmony reexport DropdownMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__modules_Dropdown_DropdownSearchInput__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js");
/* unused harmony reexport DropdownSearchInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__modules_Embed__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Embed/index.js");
/* unused harmony reexport Embed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__modules_Modal__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_97__modules_Modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__modules_Modal_ModalActions__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalActions.js");
/* unused harmony reexport ModalActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__modules_Modal_ModalContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalContent.js");
/* unused harmony reexport ModalContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__modules_Modal_ModalDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDescription.js");
/* unused harmony reexport ModalDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__modules_Modal_ModalHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalHeader.js");
/* unused harmony reexport ModalHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__modules_Popup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_102__modules_Popup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__modules_Popup_PopupContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupContent.js");
/* unused harmony reexport PopupContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__modules_Popup_PopupHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupHeader.js");
/* unused harmony reexport PopupHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__modules_Progress__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Progress/index.js");
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__modules_Rating__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Rating/index.js");
/* unused harmony reexport Rating */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__modules_Rating_RatingIcon__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Rating/RatingIcon.js");
/* unused harmony reexport RatingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__modules_Search__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/index.js");
/* unused harmony reexport Search */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__modules_Search_SearchCategory__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategory.js");
/* unused harmony reexport SearchCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__modules_Search_SearchResult__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResult.js");
/* unused harmony reexport SearchResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__modules_Search_SearchResults__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResults.js");
/* unused harmony reexport SearchResults */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__modules_Sidebar__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/index.js");
/* unused harmony reexport Sidebar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__modules_Sidebar_SidebarPushable__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js");
/* unused harmony reexport SidebarPushable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__modules_Sidebar_SidebarPusher__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js");
/* unused harmony reexport SidebarPusher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__modules_Sticky__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Sticky/index.js");
/* unused harmony reexport Sticky */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__modules_Tab__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Tab/index.js");
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__modules_Tab_TabPane__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Tab/TabPane.js");
/* unused harmony reexport TabPane */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__modules_Transition__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Transition/index.js");
/* unused harmony reexport Transition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__modules_Transition_TransitionGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Transition/TransitionGroup.js");
/* unused harmony reexport TransitionGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__views_Advertisement__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Advertisement/index.js");
/* unused harmony reexport Advertisement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__views_Card_Card__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/Card.js");
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__views_Card_CardContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js");
/* unused harmony reexport CardContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__views_Card_CardDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js");
/* unused harmony reexport CardDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__views_Card_CardGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js");
/* unused harmony reexport CardGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__views_Card_CardHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js");
/* unused harmony reexport CardHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__views_Card_CardMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js");
/* unused harmony reexport CardMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__views_Comment__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/index.js");
/* unused harmony reexport Comment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__views_Comment_CommentAction__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAction.js");
/* unused harmony reexport CommentAction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__views_Comment_CommentActions__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentActions.js");
/* unused harmony reexport CommentActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__views_Comment_CommentAuthor__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAuthor.js");
/* unused harmony reexport CommentAuthor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__views_Comment_CommentAvatar__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAvatar.js");
/* unused harmony reexport CommentAvatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__views_Comment_CommentContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentContent.js");
/* unused harmony reexport CommentContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__views_Comment_CommentGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentGroup.js");
/* unused harmony reexport CommentGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__views_Comment_CommentMetadata__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentMetadata.js");
/* unused harmony reexport CommentMetadata */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__views_Comment_CommentText__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Comment/CommentText.js");
/* unused harmony reexport CommentText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__views_Feed__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/index.js");
/* unused harmony reexport Feed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__views_Feed_FeedContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedContent.js");
/* unused harmony reexport FeedContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__views_Feed_FeedDate__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedDate.js");
/* unused harmony reexport FeedDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__views_Feed_FeedEvent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedEvent.js");
/* unused harmony reexport FeedEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__views_Feed_FeedExtra__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedExtra.js");
/* unused harmony reexport FeedExtra */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__views_Feed_FeedLabel__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLabel.js");
/* unused harmony reexport FeedLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__views_Feed_FeedLike__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLike.js");
/* unused harmony reexport FeedLike */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__views_Feed_FeedMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedMeta.js");
/* unused harmony reexport FeedMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__views_Feed_FeedSummary__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedSummary.js");
/* unused harmony reexport FeedSummary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__views_Feed_FeedUser__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Feed/FeedUser.js");
/* unused harmony reexport FeedUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__views_Item__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/index.js");
/* unused harmony reexport Item */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__views_Item_ItemContent__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemContent.js");
/* unused harmony reexport ItemContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__views_Item_ItemDescription__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemDescription.js");
/* unused harmony reexport ItemDescription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__views_Item_ItemExtra__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemExtra.js");
/* unused harmony reexport ItemExtra */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__views_Item_ItemGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemGroup.js");
/* unused harmony reexport ItemGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__views_Item_ItemHeader__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemHeader.js");
/* unused harmony reexport ItemHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__views_Item_ItemImage__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemImage.js");
/* unused harmony reexport ItemImage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__views_Item_ItemMeta__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Item/ItemMeta.js");
/* unused harmony reexport ItemMeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__views_Statistic__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/index.js");
/* unused harmony reexport Statistic */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__views_Statistic_StatisticGroup__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticGroup.js");
/* unused harmony reexport StatisticGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__views_Statistic_StatisticLabel__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticLabel.js");
/* unused harmony reexport StatisticLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__views_Statistic_StatisticValue__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticValue.js");
/* unused harmony reexport StatisticValue */
// Addons























 // Behaviors


 // Collections
































































 // Elements








































































 // Modules














































































 // Views














































































/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ethereum_factory__ = __webpack_require__("./ethereum/factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_game__ = __webpack_require__("./ethereum/game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ShowGame__ = __webpack_require__("./components/ShowGame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_blockies__ = __webpack_require__("./node_modules/react-blockies/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_blockies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_blockies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = "/home/thisguy/repos/Open-Trivia/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var axios = __webpack_require__("./node_modules/axios/index.js");



var GameIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(GameIndex, _Component);

  function GameIndex() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, GameIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = GameIndex.__proto__ || Object.getPrototypeOf(GameIndex)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        gameRenderLabel: [],
        showOpen: true,
        showInProgress: true,
        showEnded: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleFilter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var _value = _ref2.value;
        var _this$props = _this.props,
            games = _this$props.games,
            gameStarted = _this$props.gameStarted,
            gameEnded = _this$props.gameEnded;
        var _this$state = _this.state,
            showOpen = _this$state.showOpen,
            showInProgress = _this$state.showInProgress,
            showEnded = _this$state.showEnded;
        var newShowOpen = showOpen;
        var newShowInProgress = showInProgress;
        var newShowEnded = showEnded;
        if (_value === "Open") newShowOpen = !showOpen;
        if (_value === "In Progress") newShowInProgress = !showInProgress;
        if (_value === "Ended") newShowEnded = !showEnded;
        console.log("showOpen changed to: ".concat(newShowOpen));
        var renderLabelArray = new Array();
        games.map(function (game, index) {
          if (newShowOpen === true && gameStarted[index] === false) {
            renderLabelArray[index] = true;
          } else if (newShowInProgress === true && gameStarted[index] === true && gameEnded[index] === false) {
            renderLabelArray[index] = true;
          } else if (newShowEnded === true && gameEnded[index] === true) {
            renderLabelArray[index] = true;
          } else renderLabelArray[index] = false;

          console.log("showOpen: ".concat(newShowOpen, " game: ").concat(index, " gameStarted: ").concat(gameStarted[index], " gameEnded: ").concat(gameEnded[index], " renderLabel: ").concat(renderLabelArray[index]));
        });

        _this.setState({
          gameRenderLabel: renderLabelArray,
          showOpen: newShowOpen,
          showInProgress: newShowInProgress,
          showEnded: newShowEnded
        });
      }
    }), _temp));
  }

  _createClass(GameIndex, [{
    key: "renderGames",
    value: function renderGames() {
      var _this2 = this;

      var _props = this.props,
          games = _props.games,
          gameNames = _props.gameNames,
          gameStarted = _props.gameStarted,
          gameVotes = _props.gameVotes,
          gameFees = _props.gameFees,
          gamePrizes = _props.gamePrizes,
          gameEnded = _props.gameEnded;
      return games.map(function (game, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ShowGame__["a" /* default */], {
          key: index,
          address: game,
          name: gameNames[index],
          gameStarted: gameStarted[index],
          gameVotes: gameVotes[index],
          grandPrize: gamePrizes[index],
          entryFee: gameFees[index],
          renderLabel: _this2.state.gameRenderLabel[index],
          gameEnded: gameEnded[index],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        });
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */], {
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */].Item, {
        header: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Filter:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["b" /* Checkbox */], {
        toggle: true,
        label: "Open",
        defaultChecked: true,
        value: "Open",
        onChange: this.handleFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["b" /* Checkbox */], {
        toggle: true,
        label: "In Progress",
        defaultChecked: true,
        value: "In Progress",
        onChange: this.handleFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["b" /* Checkbox */], {
        toggle: true,
        label: "Ended",
        defaultChecked: true,
        value: "Ended",
        onChange: this.handleFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["j" /* Menu */].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["Link"], {
        route: "games/new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["a" /* Button */], {
        color: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["g" /* Icon */], {
        name: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), "Create Game"))));
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["f" /* Header */], {
        as: "h3",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["g" /* Icon */].Group, {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["g" /* Icon */], {
        name: "trophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["g" /* Icon */], {
        corner: true,
        name: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["f" /* Header */].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Open Trivia", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["f" /* Header */].Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, this.props.totalPrizes, " ETH in Prizes"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["d" /* Divider */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), this.renderControls(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */], {
        singleLine: true,
        selectable: true,
        unstackable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, "Current Prize"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "UpVotes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "Status"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "EntryFee"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["o" /* Table */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, this.renderGames()))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref3;

        var games, totalPrizes, gameNames, gameStarted, gameVotes, gameFees, gamePrizes, gameEnded, i, game, gameSummary;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__ethereum_factory__["a" /* default */].methods.getDeployedGames().call();

              case 2:
                games = _context.sent;
                totalPrizes = 0;
                gameNames = new Array();
                gameStarted = new Array();
                gameVotes = new Array();
                gameFees = new Array();
                gamePrizes = new Array();
                gameEnded = new Array();
                i = 0;

              case 11:
                if (!(i < games.length)) {
                  _context.next = 32;
                  break;
                }

                game = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_game__["a" /* default */])(games[i]);
                _context.next = 15;
                return game.methods.getSummary().call();

              case 15:
                gameSummary = _context.sent;
                gameNames[i] = gameSummary[1];
                gameStarted[i] = gameSummary[6];
                gameEnded[i] = gameSummary[7];
                _context.next = 21;
                return __WEBPACK_IMPORTED_MODULE_9__ethereum_web3__["a" /* default */].utils.fromWei(gameSummary[2]);

              case 21:
                gameFees[i] = _context.sent;
                _context.next = 24;
                return __WEBPACK_IMPORTED_MODULE_9__ethereum_web3__["a" /* default */].utils.fromWei(gameSummary[3]);

              case 24:
                gamePrizes[i] = _context.sent;
                totalPrizes += Number(gamePrizes[i]);
                _context.next = 28;
                return axios // .get(`localhost:3001/user/${games[i]}`)
                .get("https://tranquil-peak-32217.herokuapp.com/user/".concat(games[i])).then(function (res) {
                  // console.log(res.data.upVotes);
                  return res.data.upVotes;
                }).catch(function (err) {
                  console.log(err);
                });

              case 28:
                gameVotes[i] = _context.sent;

              case 29:
                i++;
                _context.next = 11;
                break;

              case 32:
                return _context.abrupt("return", (_ref3 = {
                  games: games,
                  gameNames: gameNames,
                  gameStarted: gameStarted,
                  gameEnded: gameEnded,
                  gameVotes: gameVotes,
                  gameFees: gameFees,
                  gamePrizes: gamePrizes
                }, _defineProperty(_ref3, "gameEnded", gameEnded), _defineProperty(_ref3, "totalPrizes", totalPrizes), _ref3));

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return GameIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameIndex);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

//extra parentheses means this is a function
var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")(); // wildcard property designated with ':'.
// we must add a route to 'games/new' first to
// prevent the second route from overriding it.


routes.add("/games/new", "/games/new").add("/games/:address", "/games/show").add("/games/:address/play", "/games/play/index");
module.exports = routes;

/***/ })

})
//# sourceMappingURL=4.0375a91b799d8f6b7870.hot-update.js.map