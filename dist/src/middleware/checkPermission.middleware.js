"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPermissionMiddleware = void 0;
class CheckPermissionMiddleware {
    constructor() {
    }
    checkPermission(req, res, next) {
        let userLogin = req.user;
        console.log(userLogin);
        let roleUser = userLogin.role;
        if (roleUser === 'admin') {
            next();
        }
        else {
            res.redirect('/error/403');
        }
    }
    ;
}
exports.CheckPermissionMiddleware = CheckPermissionMiddleware;
//# sourceMappingURL=checkPermission.middleware.js.map