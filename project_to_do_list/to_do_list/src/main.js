"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const home_1 = __importDefault(require("./pages/home"));
const Footer_1 = require("./components/Footer");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const react_router_dom_3 = require("react-router-dom");
const Header_1 = require("./components/Header");
const myTasks_1 = __importDefault(require("./pages/myTasks"));
require("./global-styles.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
    <Header_1.Header />
      <react_router_dom_2.Routes>
        <react_router_dom_3.Route path="/" element={<home_1.default />}/>
        <react_router_dom_3.Route path="mytasks" element={<myTasks_1.default />}/>
      </react_router_dom_2.Routes>
    </react_router_dom_1.BrowserRouter>
    <Footer_1.Footer />
  </react_1.default.StrictMode>);
