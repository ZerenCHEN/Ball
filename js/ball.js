//////////////////////////////////////////////// 
// BALL

var ball;

var BALL = {
    x : window.innerWidth * 0.50,
    y : window.innerHeight * 0.50,
    //
    preload : function(){
    	game.load.image('ball','img/ball300.png', 300, 300);
    },
    sprite : function(){

        ball = game.add.sprite(this.x, this.y, 'ball');
        
        game.physics.arcade.enable(ball, Phaser.Physics.ARCADE);
        
        //ball.body.setCircle(32);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(0.85,0.85);
        //ball.anchor.setTo(0.5,0.5);
        
        ball.inputEnabled = true;
        ball.input.enableDrag(true);
    },
    ball_effect : function(){
    	if(reception_counter <= 15){
    		ball.scale.setTo(0.1 + 0.01 * reception_counter,0.1 + 0.01 * reception_counter);
    	}
    	
    	if(control1 == true || control2){
    		ball.body.collideWorldBounds = false;
    	}else{
    		ball.body.collideWorldBounds = true;
    	}
    	
    }
}
