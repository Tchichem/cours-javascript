class Person { // Pascam Naming Convention
    
    constructor(name, firstName) { // permet d'initialiser des valeurs pour nos champs (propriétés objets qu'on aura)
        this.name = name;
        this.firstName = firstName;
    }

    sayHello() {
        console.log("Hey Salut je m'appelle " + this.firstName + " " + this.name);
    }
}

const albano = new Person("Albano", "Ayme"); // objets crées à partir de l'instance d'une classe Person
const wajdi = new Person ("Wajdi", "Rouafi");
const florian = new Person("Florian", "Santanonio");

albano.sayHello();
wajdi.sayHello();
florian.sayHello();