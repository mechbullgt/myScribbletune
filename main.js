// const scribble = require('scribbletune');
// scribble.transport.start(140);
 
// scribble.clip({ sample: '/kick.wav', pattern: 'x--x--x' }).start();
// scribble.clip({ sample: '/bass.wav', pattern: '[--xx--]' }).start();
// scribble.clip({ sample: '/hats.wav', pattern: '[-x]' }).start();

const scribble = require('scribbletune');
 
var clip = scribble.clip({
    notes: scribble.scale('C4 major'),
    pattern: 'x-'.repeat(8),
    synth: 'Synth'
});
 
// scribble.transport.start();
// clip.start();

scribble.midi(clip,'myMusic.midi');