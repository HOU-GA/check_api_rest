const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("BD connectée");
    } catch (error) {
        console.log("BD non connectée")
    }
};
module.exports = connectDB
