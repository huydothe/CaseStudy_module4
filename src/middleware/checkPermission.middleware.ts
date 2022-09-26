import {Request,Response,NextFunction} from "express";
import {IUser} from "../interface/IUser";

export class CheckPermissionMiddleware{

    constructor() {
    }

    checkPermission(req:Request,res:Response,next:NextFunction){
        let userLogin : any = req.user;
        console.log(userLogin);
        let roleUser = userLogin.role
        if(roleUser === 'admin'){
            next()
        }else {
            res.redirect('/error/403')
        }
    };
}