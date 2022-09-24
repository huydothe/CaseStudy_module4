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
    loginUser(req, res, next) {
        let data = req.body;
        console.log(data);
    }
    ;
    showFormRegister(req, res, next) {
        res.render('page/login/register');
    }
    ;
    registerUser(req, res, next) {
    }
    ;
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map