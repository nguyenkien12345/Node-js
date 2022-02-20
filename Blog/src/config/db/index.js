const mongoose = require('mongoose');

async function connect(){ 
    try {
        // locahost của MongoDB Compass chứ không phải localhost chạy program
        await mongoose.connect('mongodb://localhost:27017/Football', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        console.log("Connect Successfully")
    } catch (error) {
        console.log("Connect Failure")
    }
}

module.exports = { connect }