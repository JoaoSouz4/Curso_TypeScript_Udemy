"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterApp = void 0;
require("./styles.css");
const react_1 = require("react");
const CounterApp = () => {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<div className="counter-app">
          <h3>Contador de Números</h3>
          <span>{count}</span>
          <button className='increment' onClick={() => setCount(s => s + 1)}>Increment</button>
          <button className='decrement' onClick={() => {
            if (count <= 0)
                return;
            setCount(s => s - 1);
        }}>Decrement</button>
        </div>);
};
exports.CounterApp = CounterApp;
