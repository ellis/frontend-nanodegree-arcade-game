function getRandomInt(min, max) {
	return (Math.random() * (max - min + 1) ) << 0;
}

var y1 = 100 - 40;
var dy = 80;
var ys = [y1, y1+80*1, y1+80*2, y1+80*3, y1+60*4];

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x = 100;//Math.random() * 100;
	this.y = ys[getRandomInt(0, ys.length)];
	this.dx = 0; //Math.random() * 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.dx * this.dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
	this.x = 200;
	this.y = y1 + 320;
};
Player.prototype.render = Enemy.prototype.render;
Player.prototype.update = function(dt) {
};
Player.prototype.handleInput = function(key) {
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
	new Enemy(), new Enemy(), new Enemy()
];
// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
