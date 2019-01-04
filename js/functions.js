var perso = new Perso(1, 1, 25, 30);

var terrain1 = new Terrain("Aride",2,4);
var terrain2 = new Terrain("Humide",3,1);
var terrain3 = new Terrain("Humide",3,1);
var terrain4 = new Terrain("Aride",2,4);
var terrain5 = new Terrain("Aride",2,4);
var terrain6 = new Terrain("Humide",3,1);



var terrains = [[terrain1, terrain2, terrain3], [terrain4, terrain5, terrain6]];
var map = new Map(terrains, perso);

var positionPerso = document.getElementById("positionPerso");

var posX = 100;
var posY = 100;
var rayon = 50;

var score = 0;

function move(){
    document.addEventListener('DOMContentLoaded', function(){
        var canvasPerso = document.getElementById("canvasPerso");
          var ctxCanPerso = canvasPerso.getContext('2d');

          

          deplacementPerso(posX, posY, ctxCanPerso, rayon);

        document.addEventListener("keydown", function(e){
            if(map.perso.fatigue > 0 && map.perso.eau > 0){
                switch (e.keyCode) {
                    case 37: //LEFT
                        ctxCanPerso.clearRect(posX - 100, posY - 100, 200, 200); //On "efface" la zone du canvas où étais le cercle
                        posX -= 100; //On change la position en X ou Y
                        
                        if(posX < 100){
                            posX = 1500;
                            map.perso.position.x = 16;
                        }

                        map.perso.moveLeft();
                        deplacementPerso(posX, posY, ctxCanPerso, rayon);
                        score++;

                        break;

                    case 38: //UP
                        ctxCanPerso.clearRect(posX - 100, posY - 100, 200, 200);
                        posY -= 100;

                        if(posY < 100){
                            posY = 800;
                            map.perso.position.y = 16;
                        }
                        map.perso.moveUp();
                        deplacementPerso(posX, posY, ctxCanPerso, rayon);
                        score++;

                        break;

                    case 39: //RIGHT
                        ctxCanPerso.clearRect(posX - 100, posY - 100, 200, 200);
                        posX += 100;

                        if(posX > 1500){
                            posX = 100;
                            map.perso.position.x = 0;
                        }

                        map.perso.moveRight();
                        deplacementPerso(posX, posY, ctxCanPerso, rayon);
                        score++;
                        
                        break;

                    case 40: //DOWN
                        ctxCanPerso.clearRect(posX - 100, posY - 100, 200, 200);
                        posY += 100;

                        if(posY > 800){
                            posY = 100;
                            map.perso.position.y = 0;
                        }

                        map.perso.moveDown();
                        deplacementPerso(posX, posY, ctxCanPerso, rayon);
                        score++;
                        
                        break;
                }
                document.getElementById("scorePerso").innerHTML = "Score : " + score;
            }
            else{
                document.getElementById("etatPerso").innerHTML = "Etat : &dagger;";
            }
        });
    });
}

function deplacementPerso(posX, posY, ctx, rayon) {
    map.perso.fatigue -= map.getCase().facteurFatigue;
    map.perso.eau -= map.getCase().facteurEau;

    document.getElementById("positionPerso").innerHTML = "Position x : " + map.perso.position.x + " | Position y : " + map.perso.position.y;
    document.getElementById("caracteristiquesPerso").innerHTML = "Fatigue : " + map.perso.fatigue + " | Eau : " + map.perso.eau;

    ctx.beginPath(); //On démarre un nouveau tracé.
    ctx.arc(posX, posY, rayon, 0, Math.PI*2); //On trace la courbe délimitant notre forme
    ctx.fillStyle = "red";
    ctx.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
    ctx.closePath();
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("boutonRecommencer").addEventListener("click", function(){
        recommencer();
    });
});

function recommencer(){
    var ctxCanPerso = canvasPerso.getContext('2d');
    var ctxCanPerso = canvasPerso.getContext('2d');

    ctxCanPerso.clearRect(posX - 100, posY - 100, 200, 200);
    map.perso.position.x = 1;
    map.perso.position.y = 1;
    posX = 100;
    posY = 100;
    map.perso.fatigue = 25;
    map.perso.eau = 30;

    score = 0;
    document.getElementById("scorePerso").innerHTML = "Score : " + score;

    document.getElementById("etatPerso").innerHTML = "Etat : vivant";
    deplacementPerso(posX, posY, ctxCanPerso, rayon);
}