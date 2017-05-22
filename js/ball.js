
var ball;

var BALL = {
    x : 600,
    y : 300,
    //
    preload : function(){
    	game.load.image('ball','img/ball.png', 65, 66);
    },
    sprite : function(){
        ball = game.add.sprite(this.x, this.y, 'ball');
        ball.scale.setTo(1,1);
        
        game.physics.arcade.enable(ball, Phaser.Physics.ARCADE);
        
        ball.body.setCircle(32);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(1,1);
        ball.anchor.setTo(0.5,0.5);
        
        ball.inputEnabled = true;
        ball.input.enableDrag(true);
    }
}
