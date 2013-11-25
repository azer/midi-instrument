## midi-instrument

Return an object of music notes for given Midi instrument

```js
midi = require('midi-sdk')('path/to/midi', ['acoustic_grand_piano'])
instrument = require('midi-instrument')

piano = instrument(midi, 0, 0)

piano.c()
// => plays Do / C

piano['la#1']
// plays A# / La# 1

piano.mi3()
// => plays mi3
```

## Install

```bash
$ npm install midi-instrument
```
