import {Request,Response,NextFunction} from "express";
import Category from "../model/category.model";
import ProductModel from "../model/products.model";

export class ProductController{

    async formCreateProduct(req: Request, res: Response, next: NextFunction){
        let categories = await Category.find();
        res.render('admin/form',{categories : categories});
    }

    async store(req: Request, res: Response, next: NextFunction){
        let data = req.body;
        // let categorySelect = await Category.findById({
        //     _id : req.body.category._id
        // })
        let product = new ProductModel({
            name : data.name,
            price : data.price,
            author : data.author,
            made_in : data.made_in,
            description : data.description,
            category : data.category
        });
        await product.save();
        res.redirect('/admin/list/product')
    };

    async productList(req: Request, res: Response, next: NextFunction){
        let product = await ProductModel.find().populate('category');
        res.render('admin/list-product',{product : product});
    };

    async deleteProduct(req: Request, res: Response, next: NextFunction){
        await ProductModel.findByIdAndDelete({_id : req.params.id});
        res.redirect('/admin/list/product')
    }
}