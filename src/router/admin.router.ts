import express from "express";
const adminRouter = express.Router();
import multer from "multer";
import {AdminRouter} from "../controller/admin.router";

const upload = multer();
const admin = new AdminRouter();


adminRouter.get('/admin/list', (req, res,next) => {
    admin.showAdminPage(req,res,next);
});

adminRouter.get('/admin/create/product', (req, res, next) => {
    admin.formCreateProduct(req,res,next);
});

export  default adminRouter;