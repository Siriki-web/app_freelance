class Maison{

    constructor(couleur){
        this.couleur = couleur;
    }
    
    changerCouleur(nouvelleCouleur){
        this.couleur = nouvelleCouleur;
    }

}

let maMaison = new Maison("rouge");
console.log(maMaison.couleur) // Donnera “rouge”
maMaison.changerCouleur("bleu")
console.log(maMaison.couleur) // Donnera “bleu”


let monObject = { nom: "Jean", prenom: "Dupon”", age: 26};

console.log(monObject.age); // donnera 26

console.log(monObject["age"]); // donnera aussi 26