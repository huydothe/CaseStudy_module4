import express from "express";

const authRouter = express.Router();
import {AuthController} from "../controller/auth.controller";

import multer from "multer";
import passport from "../middleware/auth.middleware";

const upload = multer();
const auth = new AuthController();

authRouter.get('/login', (req, res, next) => {
    auth.showFormLogin(req, res, next);
});

authRouter.post('/login',upload.none(), passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

authRouter.get('/register', (req, res, next) => {
    auth.showFormRegister(req,res,next);
});

authRouter.post('/register', upload.none(), (req, res, next)=>{
    auth.registerUser(req,res,next);
});

export default authRouter;