var channelCounter = 0;

module.exports = instrument;

function instrument (sdk, program) {
  var api = {};
  var channel = channelCounter++;

  var i = 100;
  while (i--) {
    newNote(sdk, api, channel, i);
  }

  sdk(function () {
    MIDI.programChange(channel, program);
  });

  return api;
}

function newNote (sdk, api, channel, n) {
  defineNote(api, n, function (delay, velocity) {
    sdk(function () {
      MIDI.noteOn(channel, MIDI.pianoKeyOffset + n, velocity || 128, delay || 0);
    });
  });
}

function defineNote (api, n, fn) {
  var note = 1 + ( n % 12 );
  var tone = Math.floor(n / 12);
  var names = namesOf(note, tone);

  var i = names.length;
  while (i--) {
    api[names[i]] = fn;
  }
}

function namesOf (note, tone) {
  var result = [];

  if (note == 1) {
    result.push('c' + tone);
    result.push('do' + tone);

    if (tone == 0) {
      result.push('c');
      result.push('do');
    }
  };

  if (note == 2) {
    result.push('c#' + tone);
    result.push('do#' + tone);

    if (tone == 0) {
      result.push('c#');
      result.push('do#');
    }
  };

  if (note == 3) {
    result.push('d' + tone);
    result.push('re' + tone);

    if (tone == 0) {
      result.push('d');
      result.push('re');
    }
  };

  if (note == 4) {
    result.push('d#' + tone);
    result.push('re#' + tone);

    if (tone == 0) {
      result.push('d#');
      result.push('re#');
    }
  };

  if (note == 5) {
    result.push('e' + tone);
    result.push('mi' + tone);

    if (tone == 0) {
      result.push('e');
      result.push('mi');
    }
  };

  if (note == 6) {
    result.push('f' + tone);
    result.push('fa' + tone);

    if (tone == 0) {
      result.push('f');
      result.push('fa');
    }
  };

  if (note == 7) {
    result.push('f#' + tone);
    result.push('fa#' + tone);

    if (tone == 0) {
      result.push('f#');
      result.push('fa#');
    }
  }

  if (note == 8) {
    result.push('g' + tone);
    result.push('sol' + tone);

    if (tone == 0) {
      result.push('g');
      result.push('sol');
    }
  }

  if (note == 9) {
    result.push('g#' + tone);
    result.push('sol#' + tone);

    if (tone == 0) {
      result.push('g#');
      result.push('sol#');
    }
  }

  if (note == 10) {
    result.push('a' + tone);
    result.push('la' + tone);

    if (tone == 0) {
      result.push('a');
      result.push('la');
    }
  }

  if (note == 11) {
    result.push('a#' + tone);
    result.push('la#' + tone);

    if (tone == 0) {
      result.push('a#');
      result.push('la#');
    }
  }

  if (note == 12) {
    result.push('b' + tone);
    result.push('si' + tone);

    if (tone == 0) {
      result.push('b');
      result.push('si');
    }
  }

  return result;

}
