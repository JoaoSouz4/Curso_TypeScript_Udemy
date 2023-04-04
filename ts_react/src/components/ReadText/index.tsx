import { ReactElement, ChangeEvent } from 'react';
import { useState } from 'react';
import './styles.css';

export const ReadText = (): ReactElement => {

    const [text, setText] = useState('');

    return(
        <div className='counter-app'>
            <h3>Read App</h3>

            <input type="text"  onChange={(e: ChangeEvent<HTMLInputElement>)=> setText(e.target.value)}/>
            {text.length <=0 ? <span className='default-message'>Escreva no input...</span> : <span className = 'text-result'>{text}</span>}
            
        </div>
    )
}