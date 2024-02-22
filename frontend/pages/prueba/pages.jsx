import { useForm } from 'react-hook-form';
import styles from './SubirArticulo.module.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca-de">Acerca de</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
