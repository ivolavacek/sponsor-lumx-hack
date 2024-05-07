import './Header.css'
import logo from "../../images/logo.png"
import name from "../../images/project-name1.png"
import SwitchButton from '../switchButton/SwitchButton'
import ModeContext from '../switchButton/ModeContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function Header() {
    const { language } = useContext(ModeContext);
    
    const text = language === 'en' ? {
        register: 'Register',
        login: 'Login',
    } : { 
        register: 'Increva-se',
        login: 'Login',
    }

    return (
        <>
            <div className="header">
                <Link to="/">
                    <div className="logo-container">
                        <img src={logo} alt="logo" class="logo-header" />
                        <img src={name} alt="name" class="name-header" />
                    </div>
                </Link>

                <div className="button-container">
                    <div className="lang-switch"><SwitchButton /></div>
                    <Link to="/register"><button className="button">{text.register}</button></Link>
                    <Link to="/login"><button className="button">{text.login}</button></Link>
                </div>
            </div>
        </>
    )
}

export default Header