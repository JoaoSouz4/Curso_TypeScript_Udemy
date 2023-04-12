
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css'

function Home() {

  const [title, setTitle] = useState<string>();
  const [def, setDef] = useState<number>();

  const createTask = () => {
    console.log(title, def)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name == "title") {
      setTitle(e.target.value);
    } else if(e.target.name == "def") {
      setDef(Number(e.target.value))
    }
  }

  return (
   <main className = "main">
      <div className="titles">
        <h2>To do List</h2>
        <h4>Feito com TypeScript e React</h4>
      </div>

      <form onSubmit={createTask}>
        <div>
          <label htmlFor="">Nomeie sua tarefa:</label>
          <input name = "title" type="text" placeholder='Nome da tarefa...' onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="">Dificuldade da Tarefa:</label>
          <input name = "def" type="number" placeholder='1 a 5' onChange={handleChange}/>
        </div>

        <input type="submit" value={"Adicionar Tarefa"}/>
      </form>
   </main>
  )
}

export default Home;
