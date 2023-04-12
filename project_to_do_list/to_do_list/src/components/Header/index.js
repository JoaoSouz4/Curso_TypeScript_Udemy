"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
require("./styles.css");
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    return (<nav>
            <div className="logo">
                TS | REACT 
            </div>

            <ul className="menu-options">
                <react_router_dom_1.Link className="link" to='/'>Criar Tarefa</react_router_dom_1.Link>
                <react_router_dom_1.Link className="link" to='/mytasks'>Minhas Tarefas</react_router_dom_1.Link>
            </ul>
        </nav>);
};
exports.Header = Header;
