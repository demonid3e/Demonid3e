// need to find what does these classes mean
const {Schema, model, Types} = require("mongoose");

// must be some sort of user variable standart prepeared for DB use
const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: "Link"}] 

});

module.exports = model("User", schema);