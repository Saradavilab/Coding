class Ninja{
    constructor (name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log('Hello my name is'+ this.name);
    }
    showStats(){
        const stats={
            name: this.name,
            strength: this.strength,
            speed: this.speed,
            health: this.health,
        }
        console.log(stats);
    }
    drinkSake(){
        this.health+=10;
    }
}
const ninja1= new Ninja("Kai");

console.log(ninja1.sayName());
console.log(ninja1.drinkSake(),ninja1.health);
console.log(ninja1.showStats());
console.log(ninja1);