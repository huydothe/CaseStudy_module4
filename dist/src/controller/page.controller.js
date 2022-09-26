"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const products_model_1 = __importDefault(require("../model/products.model"));
class PageController {
    constructor() {
    }
    showHomePage(req, res, next) {
        res.render('page/index');
    }
    ;
    showBlog(req, res, next) {
        res.render('page/blog');
    }
    ;
    showContact(req, res, next) {
        res.render('page/contact');
    }
    ;
    showBlogDetail(req, res, next) {
        res.render('page/blog-detail');
    }
    ;
    async showShop(req, res, next) {
        let product = await products_model_1.default.find();
        res.render('page/shop', { product: product });
    }
    ;
    showMenShop(req, res, next) {
        res.render('page/men');
    }
    ;
    showWomenShop(req, res, next) {
        res.render('page/women');
    }
    ;
    showKidsShop(req, res, next) {
        res.render('page/kids');
    }
    ;
    shoppingCart(req, res, next) {
        res.render('page/shopping-cart');
    }
    ;
    checkOut(req, res, next) {
        res.render('page/check-out');
    }
    ;
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map