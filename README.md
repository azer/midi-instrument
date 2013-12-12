## midi-instrument

Return an object of music notes for given [MidiJS](https://github.com/mudcube/MIDI.js) instrument.

```js
midi = require('midi-sdk')('path/to/midi', ['acoustic_grand_piano', 'flute'])
instrument = require('midi-instrument')

piano = instrument(midi, 0)
flute = instrument(midi, 73)

piano.c(1, 128) // delay, velocity
// plays Do / C

piano['la#1']()
// plays A# / La# 1

flute.mi3()
// plays mi3
```

## Install

```bash
$ npm install midi-instrument
```
