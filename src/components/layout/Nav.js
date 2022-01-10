import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';


const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? '#4c76a5' : '#6da9ed' })}>Inicio</NavLink></li>
                    <li><NavLink to="/nosotros" style={({ isActive }) => ({ backgroundColor: isActive ? '#4c76a5' : '#6da9ed' })}>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" style={({ isActive }) => ({ backgroundColor: isActive ? '#4c76a5' : '#6da9ed' })}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" style={({ isActive }) => ({ backgroundColor: isActive ? '#4c76a5' : '#6da9ed' })}>Contacto</NavLink></li>
                    {/* <li><NavLink  className="activo" to="/" >Home</NavLink></li> */}
                    {/* <li><NavLink  className="activo" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className="activo" to="/novedades">Novedades</NavLink></li>
                    <li><NavLink className="activo" to="/contacto">Contacto</NavLink></li> */}
                </ul>
            </div>
        </nav>
    );
}
export default Nav;