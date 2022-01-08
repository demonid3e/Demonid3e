"use strict";

function validatePIN (pin){
    let counter = 0;
    let nondigits = 0;
const Pin = pin;
if (isNaN(Pin)){
    console.log("IS NAN");
    return false;
} else if (Pin == null){
    console.log("its null");
    return false;
}else if (Pin < 0){
    console.log("its smaller than 0")
    return false;
} if (typeof(Pin) === "string" && Pin != ""){
    let array = Pin.match(/\d/g);
     var nonDigits = Pin.match(/\D/g);
    array.forEach(() =>{
        counter++;
        
    })

    if(nonDigits != null){

    nonDigits.forEach(() =>{
        nondigits++;
    })
    }
    console.log("its string");
    if(counter == 4 || counter == 6 && nondigits <= 0){
        console.log("condition true string");
        return true;
    } else {
        return false;
    }
}


else {
    console.log("all good so far");
}
console.log(counter);
console.log(nondigits);
}


validatePIN("");