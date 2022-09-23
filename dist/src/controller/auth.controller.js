"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor() {
    }
    showFormLogin(req, res, next) {
        res.render('page/login/login');
    }
    ;
    showFormRegister(req, res, next) {
        res.render('page/login/register');
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map