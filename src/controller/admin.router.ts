import {Request,Response,NextFunction} from "express";

export class AdminRouter {

    constructor() {
    }

    showAdminPage(req: Request, res: Response, next: NextFunction){
        res.render('admin/table');
    }

    formCreateProduct(req: Request, res: Response, next: NextFunction){
        res.render('admin/form');
    }

}