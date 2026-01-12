const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const connectDB=require('./config/db');
const User=require('./models/User');


const seedUsers=async()=>{
    
    await connectDB();

    await User.deleteMany({});

    const users = [
        {
          name: "Student A1",
          email: "a1@student.com",
          password: await bcrypt.hash("password123", 10),
          role: "student",
        },
        {
          name: "Student A2",
          email: "a2@student.com",
          password: await bcrypt.hash("password123", 10),
          role: "student",
        },
        {
          name: "Professor P1",
          email: "p1@prof.com",
          password: await bcrypt.hash("password123", 10),
          role: "professor",
        },
      ];

      await User.insertMany(users);
      console.log("users seeded successfully");
      process.exit();

}

seedUsers();