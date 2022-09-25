"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const category_model_1 = __importDefault(require("../model/category.model"));
const products_model_1 = __importDefault(require("../model/products.model"));
class ProductController {
    async formCreateProduct(req, res, next) {
        let categories = await category_model_1.default.find();
        res.render('admin/form', { categories: categories });
    }
    async store(req, res, next) {
        let data = req.body;
        let product = new products_model_1.default({
            name: data.name,
            price: data.price,
            author: data.author,
            made_in: data.made_in,
            description: data.description,
            category: data.category
        });
        await product.save();
        res.redirect('/admin/list/product');
    }
    ;
    async productList(req, res, next) {
        let product = await products_model_1.default.find().populate('category');
        res.render('admin/list-product', { product: product });
    }
    ;
    async deleteProduct(req, res, next) {
        await products_model_1.default.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/admin/list/product');
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map