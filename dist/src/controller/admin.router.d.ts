import { Request, Response, NextFunction } from "express";
export declare class AdminRouter {
    constructor();
    showAdminPage(req: Request, res: Response, next: NextFunction): void;
    formCreateProduct(req: Request, res: Response, next: NextFunction): void;
}
