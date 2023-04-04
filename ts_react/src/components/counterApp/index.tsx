import './styles.css'
import { ReactElement, useState } from 'react';


export const CounterApp = (): ReactElement => {

  const [count, setCount] = useState(0);

  return (
      
        <div className="counter-app">
          <h3>Contador de Números</h3>
          <span>{count}</span>
          <button className = 'increment' onClick={():void=> setCount(s => s+1)}>Increment</button>
          <button className = 'decrement'
            onClick={():void=>{
              if(count<=0) return;
              setCount(s => s-1)
          }}>Decrement</button>
        </div>
  )
}