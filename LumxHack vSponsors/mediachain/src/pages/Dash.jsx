import HeaderLoged from '../components/headerLoged/HeaderLoged.jsx'
import DashPage from '../components/dashPage/DashPage.jsx'
import { ModeProvider } from '../components/switchButton/ModeContext'


function Dash() {
  
  return (
    <>
      <ModeProvider>
        <HeaderLoged />
        <DashPage />
      </ModeProvider>
    </>
  )
}

export default Dash;