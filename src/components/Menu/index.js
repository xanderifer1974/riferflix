import React from 'react';
import ButtonLink from '../ButtonLink'
import Logo from '../../assets/imagens/Logo.png'
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="RiferFlix logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo.
            </ButtonLink>              
        </nav>
    );

}

export default Menu;