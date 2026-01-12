const mongoose= require('mongoose');
const path=require('path');
require('dotenv').config({path : path.join(__dirname , '..' , '..' , '.env')});

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongoDB');

    }catch(error){
      console.log(error);
      process.exit(1);

    }
}

module.exports=connectDB;