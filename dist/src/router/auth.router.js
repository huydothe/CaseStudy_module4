"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
const auth_controller_1 = require("../controller/auth.controller");
const multer_1 = __importDefault(require("multer"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const upload = (0, multer_1.default)();
const auth = new auth_controller_1.AuthController();
authRouter.get('/login', (req, res, next) => {
    auth.showFormLogin(req, res, next);
});
authRouter.post('/login', upload.none(), auth_middleware_1.default.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
authRouter.get('/register', (req, res, next) => {
    auth.showFormRegister(req, res, next);
});
authRouter.post('/register', upload.none(), (req, res, next) => {
    auth.registerUser(req, res, next);
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map