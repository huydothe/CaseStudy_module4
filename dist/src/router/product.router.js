"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("../controller/page.controller");
const router = express_1.default.Router();
const page = new page_controller_1.PageController();
router.get('/', (req, res, next) => {
    page.showHomePage(req, res, next);
});
router.get('/blog', (req, res, next) => {
    page.showBlog(req, res, next);
});
router.get('/contact', (req, res, next) => {
    page.showContact(req, res, next);
});
router.get('/page/shopping-cart', (req, res, next) => {
    page.shoppingCart(req, res, next);
});
router.get('/page/blog-detail', (req, res, next) => {
    page.showBlogDetail(req, res, next);
});
router.get('/shop', (req, res, next) => {
    page.showShop(req, res, next);
});
router.get('/shop/men', (req, res, next) => {
    page.showMenShop(req, res, next);
});
router.get('/shop/women', (req, res, next) => {
    page.showWomenShop(req, res, next);
});
router.get('/shop/kids', (req, res, next) => {
    page.showKidsShop(req, res, next);
});
exports.default = router;
//# sourceMappingURL=product.router.js.map