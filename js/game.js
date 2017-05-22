/* L'interface de jeu */

var game = new Phaser.Game(
	window.innerWidth, 
	window.innerHeight, 
	Phaser.AUTO, 
	'', 
	{ preload: preload, 
	  create: create, 
	  update: update
	});


/* variable */
var toucheQ;
var toucheD;
var toucheS; 
var toucheZ;

var toucheSPACE;
var toucheENTER;


var counter = 0;
var counter2 = 0;


//////////////////////////////////////////////
// Preload()
function preload() {
	P1.preload();
	P2.preload();
	
	BALL.preload();	
}

//////////////////////////////////////////////
// Create()
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.stage.backgroundColor = '#ffffff';
	
	P1.sprite();
	P2.sprite();
	BALL.sprite();

	Keyboard();	

	
	

}


//////////////////////////////////////////////
// Update()
function update() {
	P1.deplacement();
	P2.deplacement(); 

/*	if(toucheSPACE.onDown){
		reduce(trans1);
		
	}else{
		//scale(trans1);
	}*/
}



//////////////////////////////////////////////
// autre fonction
function render() {
	game.debug.spriteCoords(player1, 32, 500);
  	
    game.debug.body(player1);
    game.debug.body(player2);
    game.debug.body(ball);
    game.debug.body(trans1);
    game.debug.body(trans2);

    game.debug.spriteInfo(player1, 32, 100);
}

function timer(){
	game.time.events.loop(Phaser.Timer.SECOND, Counter, this);
	console.log('counter');
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
    toucheQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    toucheD = game.input.keyboard.addKey(Phaser.Keyboard.D);
    toucheZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    toucheS = game.input.keyboard.addKey(Phaser.Keyboard.S);
    toucheSPACE = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    toucheSPACE.onDown.add(function(){reduce(trans1);})
    
    toucheK = game.input.keyboard.addKey(Phaser.Keyboard.K);
	toucheM = game.input.keyboard.addKey(Phaser.Keyboard.M);
	toucheO = game.input.keyboard.addKey(Phaser.Keyboard.O);
	toucheL = game.input.keyboard.addKey(Phaser.Keyboard.L);
    toucheENTER = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
}	