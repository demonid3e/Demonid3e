
class Dinglemouse{


    constructor( firstName, lastName ){
  
      this.name = firstName;
      this.surname = lastName
  
    }
        getFullName(){
        return this.name + " " + this.surname
      }
  
      
  }

  new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood"