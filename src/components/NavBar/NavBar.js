//importando componente 'Link' para navegação entre páginas
import { Link } from 'react-router-dom';

//componente para a barra de navegação

function NavBar() {
    return (
        <nav>
            {/*menu de navegação*/}
            <ul>
                {/*cada item leva a uma determinada página*/}
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/info">Sobre</Link></li>
                <li><Link to="/list">Lista de Livros</Link></li>
                <li><Link to="/add">Cadastrar</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;

