"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHello = void 0;
let logHello = (req, res, next) => {
    console.log("Hello From the middle ware");
    next();
};
exports.logHello = logHello;
//# sourceMappingURL=myMiddleware.js.map