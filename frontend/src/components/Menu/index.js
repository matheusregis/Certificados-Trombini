import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

import Search from '../Search';
import Button from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Trombini Embalagens Logo"/>
      </Link>
      <Search>
        Empresas
      </Search>
      <Button as={Link} className="ButtonLink" to="/overdue" href="/">
        Vencidos
      </Button>
      
    </nav>
  );
}

export default Menu;