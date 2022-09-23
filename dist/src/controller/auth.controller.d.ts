import { Request, Response, NextFunction } from "express";
export declare class AuthController {
    constructor();
    showFormLogin(req: Request, res: Response, next: NextFunction): void;
    showFormRegister(req: Request, res: Response, next: NextFunction): void;
}
