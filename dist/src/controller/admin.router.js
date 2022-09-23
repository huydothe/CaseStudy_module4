"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
class AdminRouter {
    constructor() {
    }
    showAdminPage(req, res, next) {
        res.render('admin/table');
    }
    formCreateProduct(req, res, next) {
        res.render('admin/form');
    }
}
exports.AdminRouter = AdminRouter;
//# sourceMappingURL=admin.router.js.map