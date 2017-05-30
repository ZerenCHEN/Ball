//////////////////////////////////////////////
// LES DEPLACEMENTS

/* variable */   
var player1;
var player2;
var trans1;
var trans2;

var p1_life = 3;
var p2_life = 3;

var control1 = false;
var control2 = false;
var recept1 = true;
var recept2 = true;


var reception_counter = 0;
var angle = 0;
var distance = 90;


    // PLAYER 1 	
var P1 = {  
    x : window.innerWidth * 0.30,
    y : window.innerHeight * 0.70,
    velocity : 700,

    preload : function(){
    	game.load.image('p1','img/ball_orange2.png', 80, 80);
        game.load.image('trans1','img/cercle_jaune.png', 200, 200);
    },
    sprite : function(){
        /* create player */
        player1 = game.add.sprite(this.x, this.y, 'p1');
        createPlayer(player1); 

        /* champ transparent */
        trans1 = game.add.sprite(this.x, this.y, 'trans1');
        createTrans(trans1);
    },
	action : function() {  
        /* deplacement du player */
        move(player1, trans1, toucheZ, toucheS, toucheQ, toucheD, this.velocity);

        /* la touche reception + lancer */
        if(toucheSPACE.isDown && recept1 == true){
            if(checkOverlap(trans1, ball) && control1 == false){
                control1 = true;
                reception_counter ++;

                sd_recept.play();
            }
            if(control1 == false){
                reducesacle1(trans1);
                sd_fail.play();
            }
        }else{
            if(control1 == true){
                control1 = false;
                ball.body.velocity.x = (ball.x - player1.x) * (5 + 0.8 * reception_counter);
                ball.body.velocity.y = (ball.y - player1.y) * (5 + 0.8 * reception_counter);
                scale(trans1);

                sd_lancer.play();
            }
        }
        
        /* direction de la balle au reception */
        if(control1 == true){
            ball.body.velocity.x = 0;
            reduce(trans1);        
            reinit(player1, trans1); 
            ball.anchor.setTo(0.5,0.5);

            if(toucheQ.isDown){
            angle -= 0.15;
            }else if(toucheD.isDown){
            angle += 0.15;
            }

            /* distance de la balle (au reception) */
            ball.x = player1.x + (distance + 5 * reception_counter) * Math.cos(angle);
            ball.y = player1.y + (distance + 5 * reception_counter)* Math.sin(angle);
        }  
    }
}


    // PLAYER 2
var P2 = {
    x : window.innerWidth * 0.70,
    y : window.innerHeight * 0.30,
    velocity : 700,

    preload : function(){
        game.load.image('p2','img/ball_rouge3.png', 80, 80);
        game.load.image('trans2','img/cercle_rouge.png', 200, 200);
    },
    sprite : function(){       
        /* create player */
        player2 = game.add.sprite(this.x, this.y, 'p2');
        createPlayer(player2);

        /* champ transparent */
        trans2 = game.add.sprite(this.x, this.y, 'trans2');
        createTrans(trans2);
    },
    action : function() {
        /* deplacement du player */
        move(player2, trans2, toucheO, toucheL, toucheK, toucheM, this.velocity);

        /* la touche reception + lancer */
        if(toucheENTER.isDown && recept2 == true){
            if(checkOverlap(trans2, ball) && control2 == false){
                control2 = true;
                reception_counter++;

                sd_recept.play();
            }
            if(control2 == false){
                reducesacle2(trans2);
                sd_fail.play();
            }
        }else{
            if(control2 == true){
                control2 = false;
                ball.body.velocity.x = (ball.x - player2.x) * (5 + 0.8 * reception_counter);
                ball.body.velocity.y = (ball.y - player2.y) * (5 + 0.8 * reception_counter);
                scale(trans2);

                sd_lancer.play();
            }
        }

        /* direction de la balle au reception */
        if(control2 == true){
            ball.body.velocity.x = 0;
            reduce(trans2);        
            reinit(player2, trans2); 
            ball.anchor.setTo(0.5,0.5);

            if(toucheK.isDown){
            angle -= 0.15;
            }else if(toucheM.isDown){
            angle += 0.15;
            }

            /* distance de la balle (au reception) */
            ball.x = player2.x + (distance + 5 * reception_counter) * Math.cos(angle);
            ball.y = player2.y + (distance + 5 * reception_counter) * Math.sin(angle);
        }  
    }
}


/////////////////////////////////
// Deplacement
function move(player, trans, up, down, left, right, velocity){
    /* standard */
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    trans.body.velocity.x = 0;
    trans.body.velocity.y = 0;

    /* fleches directionnelles */
    if (up.isDown){
        player.body.velocity.y = -velocity;
        trans.body.velocity.y = -velocity;
    }else if (down.isDown){
        player.body.velocity.y = velocity;
        trans.body.velocity.y = velocity;
    }

    if (left.isDown){
        player.body.velocity.x = -velocity;
        trans.body.velocity.x = -velocity;
    }else if (right.isDown){
        player.body.velocity.x = velocity;
        trans.body.velocity.x = velocity;
    }    
}

////////////////////////////////////////
// System gameplay

/* Scale du cercle transparent */
function reducesacle1(trans){
    recept1 = false;  
    var t = game.add.tween(trans.scale).to( { x: 0.1, y: 0.1 }, 150, Phaser.Easing.Linear.None,true);  
    t.onComplete.add(function(){
        var f = game.add.tween(trans.scale).to( { x: 0.7, y: 0.7 }, 500, Phaser.Easing.Linear.None, true);
        f.onComplete.add(function(){
            recept1 = true;      
        }, this)
    }, this)  
}
function reducesacle2(trans){
    recept2 = false;  
    var t = game.add.tween(trans.scale).to( { x: 0.1, y: 0.1 }, 150, Phaser.Easing.Linear.None,true);  
    t.onComplete.add(function(){
        var f = game.add.tween(trans.scale).to( { x: 0.7, y: 0.7 }, 500, Phaser.Easing.Linear.None, true);
        f.onComplete.add(function(){
            recept2 = true;      
        }, this)
    }, this)  
}

function reduce(trans){
    game.add.tween(trans.scale).to( { x: 0.1, y: 0.1 }, 150, Phaser.Easing.Linear.None,true);
}
function scale(trans){
    game.add.tween(trans.scale).to( { x: 0.7, y: 0.7 }, 150, Phaser.Easing.Linear.None, true);
}
/* immobilisation du personnage lors reception */
function reinit(player, trans){
    player.body.velocity.x = this.velocity;
    player.body.velocity.y = this.velocity;
    trans.body.velocity.x = this.velocity;
    trans.body.velocity.y = this.velocity;
}


/////////////////////////////////////////
// Create Players / Transparent
function createPlayer(player){
    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;
    player.scale.setTo(0.25,0.25);
    //player.body.setCircle(40);
    player.anchor.setTo(0.5,0.5); 
}
function createTrans(trans){
    game.physics.arcade.enable(trans, Phaser.Physics.ARCADE);
    trans.scale.setTo(0.7,0.7);
    //trans.body.setCircle(100);
    trans.anchor.setTo(0.5,0.5);
}

function distance_cercle(){
    a1 = player1.x - ball.x;
    b1 = player1.y - ball.y;
    c1 = Math.sqrt( a1*a1 + b1*b1 );

    a2 = player2.x - ball.x;
    b2 = player2.y - ball.y;
    c2 = Math.sqrt( a2*a2 + b2*b2 );
}