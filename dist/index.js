"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const web_router_1 = __importDefault(require("./src/router/web.router"));
const dotenv_1 = __importDefault(require("dotenv"));
const admin_router_1 = __importDefault(require("./src/router/admin.router"));
const auth_router_1 = __importDefault(require("./src/router/auth.router"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
dotenv_1.default.config();
const port = process.env.port || 3000;
const upload = (0, multer_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.static('./src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(passport_1.default.initialize());
const DB_URL = process.env.mongoose_URL;
mongoose_1.default.connect(DB_URL)
    .then(() => {
    console.log(`DataBase connected`);
})
    .catch(err => {
    console.log(`Connect fail, error: ${err.message}`);
});
app.use((0, express_session_1.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.authenticate('session'));
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});
app.use('/', web_router_1.default);
app.use('/', admin_router_1.default);
app.use('/', auth_router_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map