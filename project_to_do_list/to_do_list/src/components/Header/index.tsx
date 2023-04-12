import './styles.css';
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <nav>
            <div className="logo">
                TS | REACT 
            </div>

            <ul className = "menu-options">
                <Link className = "link" to = '/'>Criar Tarefa</Link>
                <Link className = "link" to = '/mytasks'>Minhas Tarefas</Link>
            </ul>
        </nav>
    )
}