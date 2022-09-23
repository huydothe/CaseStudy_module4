"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const admin_router_1 = require("../controller/admin.router");
const upload = (0, multer_1.default)();
const admin = new admin_router_1.AdminRouter();
adminRouter.get('/admin/list', (req, res, next) => {
    admin.showAdminPage(req, res, next);
});
adminRouter.get('/admin/create/product', (req, res, next) => {
    admin.formCreateProduct(req, res, next);
});
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map