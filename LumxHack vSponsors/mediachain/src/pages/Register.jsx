import Header from '../components/header/Header.jsx'
import RegisterPage from '../components/registerPage/RegisterPage'
import { ModeProvider } from '../components/switchButton/ModeContext'


function Register() {
  
  return (
    <>
      <ModeProvider>
        <Header />
        <RegisterPage />
      </ModeProvider>
    </>
  )
}

export default Register;