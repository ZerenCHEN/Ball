//////////////////////////////////////////////
// LES DEPLACEMENTS

receptionTimer = 0;	


/* variable */   
var player1;
var player2;

var trans1;
var trans2;
var x1 = 1;
var y1 = 1;

var control1 = false;
var control2 = false;

var vitesse = 500;
	/* player 1 */	
var P1 = {  
    x : 200,
    y : 300,
    velocity : 700,

    preload : function(){
    	game.load.image('p1','img/p.png', 80, 80);
        game.load.image('trans1','img/cercle.png', 200, 200);
    },
    sprite : function(){
        player1 = game.add.sprite(this.x, this.y, 'p1');
        game.physics.arcade.enable(player1, Phaser.Physics.ARCADE);
        player1.body.setCircle(40);
        player1.anchor.setTo(0.5,0.5);  

        /* champ transparent */
        trans1 = game.add.sprite(this.x, this.y, 'trans1');
        game.physics.arcade.enable(trans1, Phaser.Physics.ARCADE);
        //trans1.scale.setTo(1,1);
        trans1.body.setCircle(100);
        trans1.anchor.setTo(0.5,0.5);
    },
	deplacement : function() {  
        player1.body.velocity.x = 0;
        player1.body.velocity.y = 0;
        trans1.body.velocity.x = 0;
        trans1.body.velocity.y = 0;

        if (toucheZ.isDown){
            player1.body.velocity.y = -this.velocity;
            trans1.body.velocity.y = -this.velocity;
        }else if (toucheS.isDown){
            player1.body.velocity.y = this.velocity;
            trans1.body.velocity.y = this.velocity;
        }

        if (toucheQ.isDown){
            player1.body.velocity.x = -this.velocity;
            trans1.body.velocity.x = -this.velocity;
        }else if (toucheD.isDown){
            player1.body.velocity.x = this.velocity;
            trans1.body.velocity.x = this.velocity;
        }


        if(checkOverlap(ball, trans1)){
            console.log('yes1');
            if(toucheSPACE.isDown){
                control1 = true;
                if(control1 == true){
                    ball.body.velocity.x = 0;   
                }
            }else{
                if(control1 == true){
                    control1 = false;
                    ball.body.velocity.x = 300;
                }
            } 
        }else{
        
        }


    }
}


function reduce(trans){
    //;
    var t = game.add.tween(trans.scale).to( { x: 0.1, y: 0.1 }, 300, Phaser.Easing.Linear.None,true);
    t.onComplete.add(function(){
        scale(trans1);
    }, this)
}
function scale(trans){
    game.add.tween(trans.scale).to( { x: 1, y: 1 }, 400, Phaser.Easing.Linear.None, true);
}




    /* player2 */
var P2 = {
    x : 800,
    y : 300,
    velocity : 700,

    preload : function(){
        game.load.image('p2','img/p.png', 80, 80);
        game.load.image('trans2','img/cercle.png', 200, 200);
    },
    sprite : function(){
        player2 = game.add.sprite(this.x, this.y, 'p2');
        game.physics.arcade.enable(player2, Phaser.Physics.ARCADE);
        player2.body.setCircle(40);
        player2.anchor.setTo(0.5,0.5); 

        /* champ transparent */
        trans2 = game.add.sprite(this.x, this.y, 'trans2');
        trans2.scale.setTo(1,1);
        game.physics.arcade.enable(trans2, Phaser.Physics.ARCADE);
        trans2.body.setCircle(100);
        trans2.anchor.setTo(0.5,0.5);

    },
    deplacement : function() {
        player2.body.velocity.x = 0;
        player2.body.velocity.y = 0;
        trans2.body.velocity.x = 0;
        trans2.body.velocity.y = 0;

        if (toucheO.isDown){
            player2.body.velocity.y = -this.velocity;
            trans2.body.velocity.y = -this.velocity;
        }else if (toucheL.isDown){
            player2.body.velocity.y = this.velocity;
            trans2.body.velocity.y = this.velocity;
        }

        if (toucheK.isDown){
            player2.body.velocity.x = -this.velocity;
            trans2.body.velocity.x = -this.velocity;
        }else if (toucheM.isDown){
            player2.body.velocity.x = this.velocity;
            trans2.body.velocity.x = this.velocity;
        }   

        if(checkOverlap(ball, trans2)){
            console.log('yes2');
            if(toucheENTER.isDown){
                control2 = true;
                if(control2 == true){
                    ball.body.velocity.x = 0; 

                }
            }else{
                if(control2 == true){
                    control2 = false;
                    ball.body.velocity.x = -300;
                }
            } 
        }else{
            
        }      
    }
}
