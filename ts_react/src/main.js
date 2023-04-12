"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const ReadText_1 = require("./components/ReadText");
const counterApp_1 = require("./components/counterApp");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <counterApp_1.CounterApp />
    <ReadText_1.ReadText />
  </react_1.default.StrictMode>);
