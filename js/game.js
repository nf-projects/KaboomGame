import kaboom from "kaboom";

// initialize context
kaboom()

// load assets
loadSprite("bean", "https://i.ibb.co/VWyLFXn/bean-1.png");

// add a game object to screen
const player = add([
    // list of components
    sprite("bean"), // the sprite image
    pos(80, 40), // position of the sprite
    area(), // makes it collidable
    body(), // makes it a physics body
]);

keyPress("space", () => {
    // debug.log("space pressed!"); // logs to the console
    player.jump();
});
