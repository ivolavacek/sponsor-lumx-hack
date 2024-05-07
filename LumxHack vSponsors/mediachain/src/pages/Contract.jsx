import HeaderLoged from '../components/headerLoged/HeaderLoged.jsx'
import ContractPage from '../components/contractPage/ContractPage.jsx'
import { ModeProvider } from '../components/switchButton/ModeContext'


function Contract() {
  
  return (
    <>
      <ModeProvider>
        <HeaderLoged />
        <ContractPage />
      </ModeProvider>
    </>
  )
}

export default Contract;