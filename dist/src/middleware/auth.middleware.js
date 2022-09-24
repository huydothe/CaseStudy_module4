"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const user_models_1 = require("../model/user.models");
passport_1.default.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user._id, username: user.username });
    });
});
passport_1.default.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});
passport_1.default.use(new passport_local_1.Strategy(async function verify(username, password, cb) {
    let userLogin = await user_models_1.UserModel.findOne({
        username: username,
        password: password
    });
    if (!userLogin) {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
    return cb(null, userLogin);
}));
exports.default = passport_1.default;
//# sourceMappingURL=auth.middleware.js.map