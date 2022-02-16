
// npm run server


const express = require("express");
const config = require("config");
const app = express();
const mongoose = require("mongoose");

// might need to add js to file if not working
app.use("/api/auth", require("./routes/auth_routes") );

// gets port value from config, if none uses 5000
const PORT = config.get("port") || 5000;

// connects to Database, after succsseful connection starts app
async function start() {
    try {
       await mongoose.connect(config.get("mongoUri"), {
       });
       app.listen(PORT, () => {
        console.log("app is started on ", PORT);
    });
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}


start();

