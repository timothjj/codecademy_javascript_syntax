const team = {
  _players:[
    {firstName:"Tony", lastName:"Bagadonuts", age:21},
    {firstName:"Lefty", lastName:"Magilicuty", age:22},
    {firstName:"Mikey",lastName:"Fingers",age:23},  
  ],
  _games:[
    {opponent:'Mets', teamPoints:1, opponentPoints:2},
    {opponent:'Yankees', teamPoints:3, opponentPoints:2},
    {opponent:'Dodgers', teamPoints:4, opponentPoints:2},
  ],
  get players() { return this._players()},
  get games() { return this._games()},
  addPlayer(newFirstName,newLastName,newAge) {
    let player = {
      firstName:newFirstName,
      lastName:newLastName,
      age:newAge};
      this._players.push(player);},
  addGame(newOpponent, newTeamPoints,newOpponentPoints) {let game = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints};
      this._games.push(game);
  }
};

team.addPlayer('Bugs','Bunny',76);
console.log(team._players);
team.addGame('Titans',100,98);
console.log(team._games);