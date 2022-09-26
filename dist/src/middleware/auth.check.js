"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCheck = void 0;
class AuthCheck {
    checkLogin(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/login');
        }
    }
}
exports.AuthCheck = AuthCheck;
//# sourceMappingURL=auth.check.js.map