import './HeaderLoged.css'
import logo from "../../images/logo.png"
import name from "../../images/project-name1.png"
import SwitchButton from '../switchButton/SwitchButton'
import ModeContext from '../switchButton/ModeContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function Header() {
    const { language } = useContext(ModeContext);
    

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
                    <Link to="/dash"><button className="button">Dashboard</button></Link>
                    <Link to="/contract"><button className="button">Contract</button></Link>
                    <Link to="/"><button className="button">Logout</button></Link>
                </div>
            </div>
        </>
    )
}

export default Header