import {Request,Response,NextFunction} from "express";

export class AuthController {

    constructor() {

    }

    showFormLogin(req: Request, res: Response, next: NextFunction) {
        res.render('page/login/login');
    };

    showFormRegister(req: Request, res: Response, next: NextFunction) {
        res.render('page/login/register');
    }

}
