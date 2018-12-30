const scribble = require('scribbletune');
scribble.clip({ synth: 'Synth', notes: 'c4', pattern: 'x' }).start();
Tone.Transport.start();