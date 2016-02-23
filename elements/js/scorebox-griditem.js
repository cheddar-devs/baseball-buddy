Polymer({
  is: 'scorebox-griditem',
  properties: {
    homeName: {
      type: String,
      value: "Home Team"
    },
    awayName: {
      type: String,
      value: "Away Team"
    },
    homeScore: {
      type: Number,
      value: 0
    },
    awayScore: {
      type: Number,
      value: 0
    },
    homeAbrev: String,
    awayAbrev: String,
    favoriteTeam: {
      type: String,
      value: "None"
    }
  },
  homeAbbrevCalc: function(homeAbrev){
    return "bb-" + homeAbrev;
  },
  awayAbbrevCalc: function(awayAbrev){
    return "bb-" + awayAbrev;
  },
  determineSuccess: function(teamOneScore, teamTwoScore){
    if(parseInt(teamOneScore) > parseInt(teamTwoScore))
      return "success";
    else {
      return "danger";
    }
  }
});
