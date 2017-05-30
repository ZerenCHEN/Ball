var game = new Phaser.Game(
	window.innerWidth, 
	window.innerHeight, 
	Phaser.AUTO, 
	'game',
	{ preload: preload, 
	  create: create, 
	  update: update
	});


//////////////////////////////////////////////
// Preload()
function preload() {
	game.load.spritesheet('pixel', 'img/pixel.png', 4, 4);
}

//////////////////////////////////////////////
// Create()
function create() {
	var emitter = game.add.emitter(game.world.centerX, window.innerHeight, 400);

	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	//emitter.minParticleSpeed.setTo(-400, -400);
    //emitter.maxParticleSpeed.setTo(400, 400);
	
	emitter.setYSpeed(-280, -500);
	emitter.setXSpeed(0, 0);
	emitter.makeParticles('pixel');

	emitter.minParticleScale = 0.5;
	emitter.maxParticleScale = 1.5;

	//emitter.gravity = -100;
	emitter.setRotation(0, 0);
	emitter.start(false, 4000, 280); // start, durée de vie, quantité, 
}

function update() {
}