"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthToken = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let auth = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token)
        return res.status(401).send("Access denied. No token provided");
    console.log("token: " + token);
    try {
        const decoded = jsonwebtoken_1.default.verify(token.toString(), "mykey");
        req.body.user = decoded;
        next();
    }
    catch (e) {
        console.log(e);
        res.status(400).send("Invalid token");
    }
};
exports.auth = auth;
let generateAuthToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ _id: user.Email }, "mykey");
    return token;
};
exports.generateAuthToken = generateAuthToken;
//# sourceMappingURL=auth.js.map