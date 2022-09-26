import express from "express";
import {Request,Response,NextFunction} from "express";
const adminRouter = express.Router();
import multer from "multer";
import {AdminController} from "../controller/admin.controller";
import {ProductController} from "../controller/product.controller";
import {CheckPermissionMiddleware} from "../middleware/checkPermission.middleware";
// const storage =   multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './src/public/uploads');
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname);
//     }
// });
// const upload = multer({ storage : storage});
const admin = new AdminController();
const product = new ProductController();
const permission = new CheckPermissionMiddleware();


adminRouter.get('/admin/list',(req, res,next) => {
    admin.showAdminPage(req,res,next);
});

adminRouter.get('/admin/create/product', (req, res, next) => {
    product.formCreateProduct(req,res,next).catch(err=>{
        console.log(err.message)
    });
});

adminRouter.post('/admin/create/product', (req, res, next)=>{
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

adminRouter.get('/admin/product/:id/update',(req, res, next)=>{
    product.editProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
});

adminRouter.post('/admin/product/:id/update', (req, res, next)=>{
    product.edit(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

export  default adminRouter;