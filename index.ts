import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from 'multer';
import ejs from 'ejs';
import wedRouter from "./src/router/web.router";
import dotenv from 'dotenv';
import adminRouter from "./src/router/admin.router";
import authRouter from "./src/router/auth.router";
import passport from "passport";
import session from "express-session";

dotenv.config();
const port = process.env.port || 3000;
const upload = multer();
const app = express();

app.use(express.static('./src/public'))
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(bodyParser.json());
app.use(passport.initialize());


// const DB_URL = "mongodb://localhost:27017/case_study_md4";
const DB_URL = process.env.mongoose_URL;
mongoose.connect(DB_URL)
    .then(()=>{
        console.log(`DataBase connected`);
    })
    .catch(err=>{
        console.log(`Connect fail, error: ${err.message}`)
    });


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
})


app.use('/',wedRouter);
app.use('/',adminRouter);
app.use('/',authRouter);



app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})