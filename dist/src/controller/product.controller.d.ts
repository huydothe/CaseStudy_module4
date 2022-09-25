import { Request, Response, NextFunction } from "express";
export declare class ProductController {
    formCreateProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    store(req: Request, res: Response, next: NextFunction): Promise<void>;
    productList(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
}
