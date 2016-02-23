Polymer({
  is: 'scorebox-grid',
  properties: {
    isTable: {
      type: Boolean,
      value: false
    },
    games: String
  },
  gridLoaded: function(data){
    console.log(data);
  }
});
