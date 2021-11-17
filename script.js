"use strict";

class Chefs {
  constructor(name, age, sex, working){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.working = working;
      }
      showThisName(){
        console.log(`${this.name}`);
      }
}


class CarvingChef extends Chefs {
  constructor(name, age, sex, working, carving){
    super(name, age, sex, working, carving);
    this.carving = carving;
  }
}



const Olly = new Chefs("Oliver", 25, "male", "ovens");
const Macy = new Chefs("Macy", 21, "female", "puddings");
const Rob = new CarvingChef("Robert", 45, "male", "deck", "carving");

console.log(Rob);
console.log(Olly);
console.log(Macy);

Rob.showThisName();
