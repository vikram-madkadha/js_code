import  superheroes,{randomSuperhero} from "superheroes";
var name=randomSuperhero();
console.log("I am "+name);
var randomName=superheroes[Math.floor(Math.random()*superheroes.length-1)];
console.log("I am "+randomName);

