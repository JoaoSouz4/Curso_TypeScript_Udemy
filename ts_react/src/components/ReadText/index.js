"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadText = void 0;
const react_1 = require("react");
require("./styles.css");
const ReadText = () => {
    const [text, setText] = (0, react_1.useState)('');
    const result = text;
    console.log(result);
    return (<div className='counter-app'>
            
            <h3>Read App</h3>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            {text.length <= 0 ? <span className='default-message'>Escreva no input...</span> : <span className='text-result'>{text}</span>}
        </div>);
};
exports.ReadText = ReadText;
