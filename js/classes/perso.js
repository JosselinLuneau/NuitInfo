class Perso {
    constructor(px,py,Fatigue,Eau) {
        this.position = {
            x:px,
            y:py
        };
        this.fatigue = Fatigue;
        this.eau = Eau;
    }

    moveDown() {
        this.position.y +=1;
    }
    moveUp() {
        this.position.y -=1;
    }
    moveLeft() {
        this.position.x -=1;
    }
    moveRight() {
        this.position.x +=1;
    }

    getPosition() {
        return this.position;
    }
}