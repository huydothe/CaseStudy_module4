"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const admin_controller_1 = require("../controller/admin.controller");
const product_controller_1 = require("../controller/product.controller");
const upload = (0, multer_1.default)();
const admin = new admin_controller_1.AdminController();
const product = new product_controller_1.ProductController();
adminRouter.get('/admin/list', (req, res, next) => {
    admin.showAdminPage(req, res, next);
});
adminRouter.get('/admin/create/product', (req, res, next) => {
    product.formCreateProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.post('/admin/create/product', upload.single('image'), (req, res, next) => {
    product.store(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/list/product', (req, res, next) => {
    product.productList(req, res, next).catch(err => {
        console.log(err.message);
    });
});
adminRouter.get('/admin/product/:id/delete', (req, res, next) => {
    product.deleteProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map