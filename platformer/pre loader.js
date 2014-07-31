var BasicGame = ();

 BasicGame.preload = function (game)
function preload()
{
game.load.tileamp('level1', 'Sssets/Sprites/level1.json', null, Phaser.tileamp.TILED_JSON);
game.load.inage('tiles-1', Assets/Sprites/'tiles-1.png');
game.load.spritesheet('dude',Assets/Sprites/'dude.png', 32, 48);
game.load.spritesheet('droid','Assets/Sprites/droid.png',32,32);
game.load.image('starSmall', 'Assets/Sprites/star.png');
game.load.image('starBig', 'Assets/Sprites/star2.png');
game.load.image('background', 'Assets/SPrites/