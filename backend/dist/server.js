"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const cors_1 = __importDefault(require("cors"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const orderRoute_1 = __importDefault(require("./routes/orderRoute"));
//dotenv.config() isfunction is used to load environment variable into process.env
// this allow you to define configuration settings in a .env file
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/auth', authRoute_1.default);
app.use('/api/product', productRoute_1.default);
app.use('/api/order', orderRoute_1.default);
app.get('/', (req, res) => {
    res.send('what nigga ');
});
const port = 8080;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
module.exports = app;
