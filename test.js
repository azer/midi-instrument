var instrument = require("./");
var sdk = require("midi-sdk")('http://midijs.azer.io', ['acoustic_grand_piano']);

it('returns an API with notes', function(done){
  var piano = instrument(sdk, 0, 0);
  var song = 'mi mi fa sol sol fa mi re do do re mi mi re re'.split(' ');

  song.map(function (note, ind) {
    piano[note + '3'](ind * 0.25);
  });

  done();
});
