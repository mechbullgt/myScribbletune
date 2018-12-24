const scribble = require('scribbletune');

let scribbleClip1 = scribble.clip({
    notes:['c4','d4','e4','f4','g4','a4','b4','c5'],
    pattern:'x---x---xxx--x--x--x'
});

let cMajor = scribble.scale('c4','major');
let scribbleClip2 = scribble.clip({
    notes:cMajor.filter((a,x)=>x%2==0),
    pattern:'x---x---xxx--x--x--x'
});

let dMajor = scribble.scale('d4','major');
let scribbleClip= scribble.clip({
    notes:dMajor.filter((a,x)=>x%2==0),
    pattern:'x---'.repeat(4)
})

// scribble.midi(scribbleClip,'c4.midi');
// scribble.midi(scribbleClip);
scribble.midi(scribbleClip,'repeaterSample.midi');