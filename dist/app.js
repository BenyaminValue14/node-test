"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetings = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
function greetings() {
    console.log("hola mundo");
}
exports.greetings = greetings;
greetings();
//configurar dotenv
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map