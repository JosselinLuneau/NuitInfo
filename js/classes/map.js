class Map {
    constructor(terrains,perso) {
        this.terrain = terrains;
        this.perso = new Perso(perso.position.x,perso.position.y,perso.fatigue,perso.eau);
    }

    getCase() {
    	console.log(this.perso.position.y%2 + ' ' + this.perso.position.x%3);
        return this.terrain[this.perso.position.y%2][this.perso.position.x%3];
    }
}