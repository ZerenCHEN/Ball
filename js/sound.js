// SON

var music = true;

///////////////////////////////////////// 
/// preload 
function soundPreload(){
	game.load.audio('music_fond', 'sound/space_musique_1.mp3');
    game.load.audio('lancer', 'sound/lancer.mp3');
    game.load.audio('recept', 'sound/recept.mp3');
    game.load.audio('fail', 'sound/fail.mp3');
    game.load.audio('die', 'sound/mort.mp3')
}

var sd_music;
var sd_lancer;
var sd_recept;
var sd_fail;
var sd_die;

/////////////////////////////////////// 
/// create
function soundCreate(){
	// tous les adds
    sd_music = game.add.audio('music_fond',0.1,0);
    sd_lancer = game.add.audio('lancer', 1,0);
    sd_recept = game.add.audio('recept', 1 , 0);
    sd_fail = game.add.audio('fail', 1, 0);
    sd_die = game.add.audio('die', 1, 0)
}

////////////////////////////////////////// 
/// regroupe tout les functions sons
function playsound(){
	fond();
}

// Les functions des sons
/////////////////////////////////////////////////////////////////
function fond(){
    if(music == true){
        sd_music.play();
        music = false;
    }  
}