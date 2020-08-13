import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagens/Logo.png'
import './menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RiferFlix logo" />
            </Link>
            <Link to="/cadastro/video">
                <Button>
                    Novo Vídeo.
                </Button>
            </Link>

        </nav>
    );

}

export default Menu;