var instrument = require("./");
var sdk = require("midi-sdk")('http://localhost:3000', ['acoustic_grand_piano']);

it('returns an API with notes', function(done){
  var piano = instrument(sdk, 0, 0);

  piano.c();
  piano.re(0.25);
  piano.mi(0.50);
  piano.f(0.75);
  piano.sol(1);

  done();
});
