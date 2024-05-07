import Header from '../components/header/Header.jsx'
import LoginPage from '../components/loginPage/LoginPage'
import { ModeProvider } from '../components/switchButton/ModeContext'


function Login() {
  
  return (
    <>
      <ModeProvider>
        <Header />
        <LoginPage />
      </ModeProvider>
    </>
  )
}

export default Login;