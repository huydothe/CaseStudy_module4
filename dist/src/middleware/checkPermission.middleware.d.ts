import { Request, Response, NextFunction } from "express";
export declare class CheckPermissionMiddleware {
    constructor();
    checkPermission(req: Request, res: Response, next: NextFunction): void;
}
