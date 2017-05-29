/* L'interface de jeu */

var game = new Phaser.Game(
	window.innerWidth, 
	window.innerHeight, 
	Phaser.AUTO, 
	'', 
	{ preload: preload, 
	  create: create, 
	  update: update ,render : render
	});


/* variable */

var counter = 0;
var emitter;

//////////////////////////////////////////////
// Preload()
function preload() {
	game.load.spritesheet('pixel', 'img/pixel.png', 4, 4);

	P1.preload();
	P2.preload();
	
	BALL.preload();
	LIFE.preload();	
}

//////////////////////////////////////////////
// Create()
function create() {
	var emitter = game.add.emitter(game.world.centerX, window.innerHeight, 400);

	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	//emitter.minParticleSpeed.setTo(-400, -400);
    //emitter.maxParticleSpeed.setTo(400, 400);
	
	emitter.setYSpeed(-280, -420);
	emitter.setXSpeed(0, 0);
	emitter.makeParticles('pixel');

	emitter.minParticleScale = 0.5;
	emitter.maxParticleScale = 1.5;

	//emitter.gravity = -100;
	emitter.setRotation(0, 0);
	emitter.start(false, 2800, 280); // start, durée de vie, quantité,

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.stage.backgroundColor = '#1E1E28';
	
	P1.sprite();
	P2.sprite();
	BALL.sprite();

	Keyboard();	

	LIFE.sprite();

}


//////////////////////////////////////////////
// Update()
function update() {
	P1.action();
	P2.action(); 

	BALL.ball_effect();

	// Collide Modif
	position_recadrage(trans1, player1);
	position_recadrage(trans2, player2);

	LIFE.life();
	LIFE.gameover();

	distance_cercle();
}


//////////////////////////////////////////////
// autre fonction
function render() {
	/*game.debug.spriteCoords(player1, 32, 500);
  	
    game.debug.body(player1);
    game.debug.body(player2);
    game.debug.body(ball);
    game.debug.body(trans1);
    game.debug.body(trans2);

    game.debug.spriteInfo(player1, 32, 100);*/

}

	
function Counter() {
    counter++;
    console.log(counter);
}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

function Keyboard(){
    fleche = game.input.keyboard.createCursorKeys();
    toucheQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    toucheD = game.input.keyboard.addKey(Phaser.Keyboard.D);
    toucheZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    toucheS = game.input.keyboard.addKey(Phaser.Keyboard.S);
    toucheSPACE = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    toucheK = game.input.keyboard.addKey(Phaser.Keyboard.K);
	toucheM = game.input.keyboard.addKey(Phaser.Keyboard.M);
	toucheO = game.input.keyboard.addKey(Phaser.Keyboard.O);
	toucheL = game.input.keyboard.addKey(Phaser.Keyboard.L);
    toucheENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
}	


function position_recadrage(trans, player){
	trans.x = player.x;
	trans.y = player.y;
}
