import express from "express";
const adminRouter = express.Router();
import multer from "multer";
import {AdminController} from "../controller/admin.controller";
import {ProductController} from "../controller/product.controller";

const upload = multer();
const admin = new AdminController();
const product = new ProductController();


adminRouter.get('/admin/list', (req, res,next) => {
    admin.showAdminPage(req,res,next);
});

adminRouter.get('/admin/create/product', (req, res, next) => {
    product.formCreateProduct(req,res,next).catch(err=>{
        console.log(err.message)
    });
});

adminRouter.post('/admin/create/product',upload.single('image'), (req, res, next)=>{
    product.store(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

adminRouter.get('/admin/list/product',(req, res, next)=>{
    product.productList(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

adminRouter.get('/admin/product/:id/delete',(req, res, next)=>{
    product.deleteProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

export  default adminRouter;