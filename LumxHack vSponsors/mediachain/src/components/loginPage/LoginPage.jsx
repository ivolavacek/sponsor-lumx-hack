import './LoginPage.css'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <>
            <div className="bbb">
                <div className="aaa">Login Page</div>
                <div className="menu-container-login">
                    <Link to="/dash"><button className="button">Dashboard</button></Link>
                    <Link to="/contract"><button className="button">Contract</button></Link>
                </div>
            </div>
        </> 
    );
}

export default Login;