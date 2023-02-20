class Ninja{
    constructor (name){
        this.name=name;
        this.health=100;git 
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log('Hello my name is' + this. name);
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
const ninja1= new Ninja ("Kai");

console.log(ninja1.sayName());
console.log(ninja1.drinkSake(),ninja1.health);
console.log(ninja1.showStats());
console.log(ninja1);

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
       const drink = super.drinkSake();
       console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }

    showStatsW(){
        const stats = super.showStats();
        console.log("Wisdom:" + this.wisdom);

    }
}

const superSensei = new Sensei ("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();
console.log({superSensei});