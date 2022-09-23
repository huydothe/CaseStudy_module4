import express from "express";

const authRouter = express.Router();
import {AuthController} from "../controller/auth.controller";

import multer from "multer";

const upload = multer();
const auth = new AuthController()
authRouter.get('/login', (req, res, next) => {
    auth.showFormLogin(req, res, next);
});

authRouter.get('/register', (req, res, next) => {
    auth.showFormRegister(req,res,next);
});


export default authRouter;