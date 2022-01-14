# Animpng-js

**Animpng-js** provides functions for parse and render animated (PNG's)

# Usage
To intall run the command ```npm i animpng-js```

# API
**ParseAPNG(buf: ArrayBuffer): (APNG|Error)**

**Default exported function**. Parses APNG data, returns APNG object (see below) or Error. This function can be used in node.js environment. Object methods relies on browser features (canvas, requestAnimationFrame…) and should work only in browser.

Usage:

```JS
import parseAPNG from 'animpng-js';

const apng = parseAPNG(buffer);
if (apng instanceof Error) {
    // handle error
}
// work with apng object
```

# Classes

Structure of animpng file

```JS
class APNG {
    width: number     // with of canvas, pixels
    height: number    // height of canvas, pixels
    numPlays: number  // number of times to loop animation (0 = infinite looping)
    playTime: number  // total duration of one loop in milliseconds
    frames: Frame[]   // array of frames

    // Methods
    createImages(): Promise // create imageElement's for all frames
    getPlayer(context: CanvasRenderingContext2D, autoPlay: boolean = false): Promise.<Player>
        // Create Player (see below) on given context and start playing
        // if autoPlay is true.
}
```
