import './navbar.scss';
import CustomLink from '../CustomLink/CustomLink';
import TituloPrincipal from '../TituloPrincipal/TituloPrincipal';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <CustomLink to='/'>
          <TituloPrincipal titulo='Tienda Alfonso' />
        </CustomLink>
        <ul>
          <li>
            <CustomLink to='/'>Inicio</CustomLink>
          </li>
          <li>
            <CustomLink to='/productos'>Productos</CustomLink>
          </li>
          <li>
            <CustomLink to='/acerca'>Nosotros</CustomLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
