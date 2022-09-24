import {Request,Response,NextFunction} from "express";

export class AuthController {

    constructor() {

    }

    showFormLogin(req: Request, res: Response, next: NextFunction) {
        res.render('page/login/login');
    };

    loginUser(req: Request, res: Response, next: NextFunction){
        let data = req.body;
        console.log(data);
    };

    showFormRegister(req: Request, res: Response, next: NextFunction) {
        res.render('page/login/register');
    };

    registerUser(req: Request, res: Response, next: NextFunction){

    };

}
