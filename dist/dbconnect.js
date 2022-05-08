"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDisconnect = exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gradproject'
};
function handleDisconnect() {
    exports.connection = mysql_1.default.createConnection(db_config);
    exports.connection.connect(function (err) {
        if (err) {
            console.log("Error When connecting to database ", err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    exports.connection.on('error', function (err) {
        console.log("db error ", err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.log("Inside the if err.code");
            handleDisconnect();
        }
        else {
            console.log("error connecting to database throw error");
            throw err;
        }
    });
}
exports.handleDisconnect = handleDisconnect;
handleDisconnect();
//# sourceMappingURL=dbconnect.js.map