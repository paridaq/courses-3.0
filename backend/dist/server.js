"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
//dotenv.config() isfunction is used to load environment variable into process.env
// this allow you to define configuration settings in a .env file
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('api/auth', authRoute_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
