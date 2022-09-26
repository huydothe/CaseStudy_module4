import {Request,Response,NextFunction} from "express";
import ProductModel from "../model/products.model";

export class PageController {
    constructor() {
    }

    showHomePage(req: Request, res: Response, next: NextFunction) {

        res.render('page/index');
    };

    showBlog(req: Request, res: Response, next: NextFunction){
        res.render('page/blog');
    };

    showContact(req: Request, res: Response, next: NextFunction){
        res.render('page/contact');
    };

    showBlogDetail(req: Request, res: Response, next: NextFunction){
        res.render('page/blog-detail');
    };

    async showShop(req: Request, res: Response, next: NextFunction){
        let product = await ProductModel.find();
        res.render('page/shop', {product : product});
    };

    showMenShop(req: Request, res: Response, next: NextFunction){
        res.render('page/men');
    };

    showWomenShop(req: Request, res: Response, next: NextFunction){
        res.render('page/women');
    };

    showKidsShop(req: Request, res: Response, next: NextFunction){
        res.render('page/kids');
    };

    shoppingCart(req: Request, res: Response, next: NextFunction){
        res.render('page/shopping-cart');
    };

    checkOut(req: Request, res: Response, next: NextFunction){
        res.render('page/check-out');
    };
}