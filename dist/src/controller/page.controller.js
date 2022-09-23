"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
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
    showShop(req, res, next) {
        res.render('page/shop');
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
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map