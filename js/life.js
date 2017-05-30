///////////////////////////////// 
/// System de vie + la mort

hitplayer = true;
var particule = false;

var LIFE = {
	x1 : window.innerWidth * 0.3,
	y1 : window.innerHeight * 0.1,
	x2 : window.innerWidth * 0.69,
	y2 : window.innerHeight * 0.1,
	scale : 2,
	decalage : 35,
 	preload : function(){
		// Image Coeur
		game.load.image('life','img/life.png');
		game.load.image('pixel_jaune', 'img/pixel_jaune.png');
	},
	sprite : function(){
		// Image Coeur 2 Sprite
		p1_life_img1 = game.add.sprite(this.x1, this.y1, 'life');
		p1_life_img1.scale.setTo(this.scale,this.scale);
		p1_life_img2 = game.add.sprite(this.x1 + this.decalage, this.y1, 'life');
		p1_life_img2.scale.setTo(this.scale,this.scale);
		p1_life_img3 = game.add.sprite(this.x1 + this.decalage * 2, this.y1, 'life');
		p1_life_img3.scale.setTo(this.scale,this.scale);

		p2_life_img1 = game.add.sprite(this.x2, this.y2, 'life');
		p2_life_img1.scale.setTo(this.scale,this.scale);
		p2_life_img2 = game.add.sprite(this.x2 - this.decalage, this.y2, 'life');
		p2_life_img2.scale.setTo(this.scale,this.scale);
		p2_life_img3 = game.add.sprite(this.x2 - this.decalage * 2, this.y2, 'life');
		p2_life_img3.scale.setTo(this.scale,this.scale);
	},
	life : function(){
		if(checkOverlap(player1, ball)){
	    	p1_life --;
	    	sd_die.play();
	    	particule = false;
	    	LIFE.pixel_jaune();
	    	if (p1_life == 2) {
	    		p1_life_img3.kill();
	    	}else if (p1_life == 1) {
	    		p1_life_img2.kill();
	    	}else if (p1_life == 0) {
	    		p1_life_img1.kill();
	    	}
	    	réincarnation(P1, player1);
		}

		if(checkOverlap(player2, ball)){
	    	p2_life --;
	    	sd_die.play();
	    	particule = false;

	    	if (p2_life == 2) {
	    		p2_life_img1.kill();
	    		//console.log("-1");
	    	}else if (p2_life == 1) {
	    		p2_life_img2.kill();
	    		//console.log("-1");
	    	}else if(p2_life == 0) {
	    		p2_life_img3.kill();
	    		//console.log("-1");
	    	}
	    	réincarnation(P2, player2);
		}
	},
	gameover : function(){
		if (p1_life <= 0) {
	    	document.location.href='gameover_player1.html';
		}else if (p2_life <= 0) {
			document.location.href='gameover_player2.html';
		}
	},
	pixel_jaune : function(){
		var emitter = game.add.emitter(player1.x, player1.y, 400);

		emitter.makeParticles('pixel_jaune');

	    emitter.minParticleSpeed.setTo(-400, -400);
	    emitter.maxParticleSpeed.setTo(400, 400);

	    emitter.setScale(0.4, 2, 0.4, 2);
	    emitter.start(particule, 500, 20);
	}
}

function réincarnation(P, player){
	reception_counter = 0;

	player.x = P.x;
	player.y = P.y;
	ball.body.velocity.x = 0;
	ball.body.velocity.y = 0;
	if(P == P1){
		ball.x = P1.x + 58;
		ball.y = P1.y-16;
	}
	if(P == P2){
		ball.x = P2.x - 58;
		ball.y = P2.y-16;
	}
}