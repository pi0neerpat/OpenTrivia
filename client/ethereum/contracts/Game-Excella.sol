pragma solidity ^0.4.21;

    /// Register using your name and pay the entry fee
    function register(string name) payable public {
        assert(msg.value >= entryFee);
        assert(!rounds[0].started);
        assert(!players[msg.sender].isRegistered);
        players[msg.sender].name = name;
        players[msg.sender].isRegistered = true;
        numPlayers++;

        // Return funds if the player overpayed
        uint overPaid = msg.value - entryFee;
        if (overPaid > 0) { msg.sender.transfer(overPaid); }
    }

    function guess(string thesis) public {
        // Ensure the player is registered and has not guessed this round
        assert(players[msg.sender].isRegistered);
        assert(players[msg.sender].guessedThisRound < currentRound+1);
        // Ensure the round is not over
        assert(rounds[currentRound].started == true);
        assert(rounds[currentRound].complete == false);

        players[msg.sender].guessedThisRound = currentRound +1;

        // Check guess & assign points
        if (keccak256(thesis) == keccak256(rounds[currentRound].answer)) {
            players[msg.sender].score++;
        }
        if (players[msg.sender].score > highScore) {
          delete winners;
          winners.push(msg.sender);
          highScore = players[msg.sender].score;
        } else if (players[msg.sender].score == highScore) { winners.push(msg.sender);}
    }
