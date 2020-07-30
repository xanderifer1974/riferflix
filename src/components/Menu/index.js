import React from 'react'
import ButtonLink from '../ButtonLink'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagens/Logo.png'
import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RiferFlix logo" />
            </Link>
            <Link to="/cadastro/video">
                <ButtonLink className="ButtonLink">
                    Novo Vídeo.
                </ButtonLink>
            </Link>

        </nav>
    );

}

export default Menu;