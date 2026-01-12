const express= require('express');
const session=require('express-session');
const connectDB=require('./config/db');

const app=express();

const PORT=process.env.PORT || 3000;

const connection=async()=>{
    try {
        await connectDB();
    } catch(error) {
        console.error('Database connection failed:', error.message);
       
    }
}

connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session ({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:3600000,
        httpOnly:true,     
    }
}));

app.get('/' , (req, res)=>{
    res.send('hello karan');
})


app.get('/test', (req,res)=>{
    res.send('test route');
    
})


app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`);
    
})