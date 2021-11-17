"use strict";

/////// JSON //////////

// to send JSON data objects need to be converted into "" strings with double commas

const personne = {
  name: "Alex",
  tel: "+7444444444",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};
const jsonPerson = JSON.stringify(personne);
// converts object into JSON readable way
console.log(JSON.stringify(personne)); // {"name":"Alex","tel":"+7444444444"}

// parse will convert JSON data from backend to object
console.log(JSON.parse(jsonPerson)); // { name: 'Alex', tel: '+7444444444' }

// You can make a full object copy using json.parse stringify
const clone = JSON.parse(JSON.stringify(personne));
clone.parents.mom = "Anna";

console.log(clone);
console.log(personne);
