'use strict'

const ioHook = require('iohook');

console.log('Press a keyboard button / click a mouse');

let currentTimeForKeyboard = Date.now();
let currentTimeForMouse = Date.now();

ioHook.on('keydown', e => {
    const current = Date.now();
    const diff = current - currentTimeForKeyboard;
    if (diff < 100) {
        console.log('Keyboard is double clicking: ' + diff + "ms");
    } else {
        currentTimeForKeyboard = current;
        console.log('Keyboard is fine : ' + diff + "ms");
    }
});

ioHook.on('mouseclick', e => {
    const current = Date.now();
    const diff = current - currentTimeForMouse;
    if (diff < 100) {
        console.log('Mouse is double clicking: ' + diff + "ms");
    } else {
        currentTimeForMouse = current;
        console.log('Mouse is fine : ' + diff + "ms");
    }
});

ioHook.start(false);
