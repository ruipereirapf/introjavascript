const team = {
    _players: [
      { firstName: "Rui", lastName: "Pereira", age: 29 },
      { firstName: "Pedro", lastName: "Fernandes", age: 28 },
      { firstName: "Alfredo", lastName: "Rodrigues", age: 26 },
    ],
    _games: [
      { opponent: "Porto", teamPoints: 42, opponentPoints: 27 },
      { opponent: "Benfica", teamPoints: 34, opponentPoints: 25 },
      { opponent: "Sporting", teamPoints: 36, opponentPoints: 20 },
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
      asd
    },
  };
  
  team.addPlayer("Valter", "Pereira", 35);
  team.addGame("Gil Vicente", 10, 43);
  
  console.log(team.players);
  console.log(team.games);
  