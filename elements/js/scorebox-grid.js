Polymer({
  is: 'scorebox-grid',
  properties: {
    isTable: {
      type: Boolean,
      value: false
    },
    favoriteTeam: String,
    games: String
  },
  gridLoaded: function(data){
    console.log(data);
  },
  isFavorite: function(homeTeam, awayTeam, favoriteTeam){
    if(homeTeam === favoriteTeam || awayTeam === favoriteTeam)
      return "isFavorite";
    else {
      return "";
    }
  },
  showOnlyFavorite: function(homeTeam, awayTeam, favoriteTeam){
    if(homeTeam === favoriteTeam || awayTeam === favoriteTeam)
      return "";

    return "isFavorite";
  }
});
