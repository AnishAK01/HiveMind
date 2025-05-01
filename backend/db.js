const mongoose = require('mongoose');


const connectTodDb = async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected!'));
}
module.exports = connectTodDb;