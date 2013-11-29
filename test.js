var instrument = require("./");
var sdk = require("midi-sdk")('http://midijs.azer.io', ['acoustic_grand_piano', 'cello', 'clarinet']);

it('returns an API with notes', function(done){
  var piano = instrument(sdk, 0, 0);
  var cello = instrument(sdk, 1, 42);
  var clarinet = instrument(sdk, 2, 71);
  var song = 'mi mi fa sol sol fa mi re do do re mi mi re re'.split(' ');

  cello.sol5(1.25);
  clarinet.fa3(0.75);

  song.map(function (note, ind) {
    piano[note + '3'](ind * 0.25);
  });

  done();
});
