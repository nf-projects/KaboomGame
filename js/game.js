import kaboom from "kaboom";

// initialize context
kaboom()

// load assets
loadSprite("birdy", "https://i.ibb.co/sR8xGth/Flappy-Bird-Logo-PNG-Pic.png"); // flappy bird icon
loadSprite("bg", "https://i.ibb.co/zsH9nJQ/46888871-624a3900-ce7f-11e8-808e-99fd90c8a3f4.png"); // background

add([
    sprite("bg", {width: width(), height: height()}), // width() and heighth() are functions that return the width and height of the canvas
]);

// 

// add a game object to screen
const player = add([
    // list of components
    sprite("birdy"), // the sprite image
    pos(80, 40), // position of the sprite
    area(), // makes it collidable
    body(), // makes it a physics body
    scale(0.25), // scale the sprite
]);

keyPress("space", () => {
    // debug.log("space pressed!"); // logs to the console
    player.jump();
});
