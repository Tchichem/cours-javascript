class Pokemon {
    constructor(name, hp, lck) { // permet d'initialiser des valeurs pour nos champs (propriétés objets qu'on aura)
        this.name = name;
        this.atk = this.generateRndAtkDef();
        this.def = this.generateRndAtkDef();
        this.hp = hp;
        this.lck = lck;
    }

    generateRndAtkDef(min, max){
        return Math.floor(Math.random() * (25 - 1 * 1) + 1);
    }

    isLucky() {
        let prec = (Math.random() * 10);
        // if(prec < this.lck){
        //     return true;
        // } else {
        //     return false;
        // }
        
        // condition ternaire
        return (prec < this.lck) ? true : false;
    }

    attackPokemon(victim) {
        console.log(this.name + " PV : " + this.hp);
        console.log(victim.name + " PV : " + victim.hp);

        if (this.isLucky() == true) {
            let fullatk = this.atk - victim.def;
            victim.hp = victim.hp - fullatk;
            console.log(this.name + " attaque " + victim.name + " de " + fullatk + " points.");
            console.log("La vie de " + victim.name + " est " + victim.hp);
            console.log("----------------------------------------------------");
        } else {
            console.log(this.name + " n'a pas pu attaquer.");
            console.log("----------------------------------------------------");
        }
    }
}

const absol = new Pokemon ("Absol", 50, 7);
const etouraptor = new Pokemon ("Etouraptor", 60, 5);

etouraptor.attackPokemon(absol);
etouraptor.attackPokemon(absol);
etouraptor.attackPokemon(absol);
absol.attackPokemon(etouraptor);
absol.attackPokemon(etouraptor);
absol.attackPokemon(etouraptor);

while(etouraptor.hp > 0 && absol.hp > 0) {
    etouraptor.attackPokemon(absol);
    if(absol.hp > 0) {
        absol.attackPokemon(etouraptor);
    }
}