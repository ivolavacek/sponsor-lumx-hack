import Header from '../components/header/Header.jsx'
import HomePage from '../components/homePage/HomePage'
import { ModeProvider } from '../components/switchButton/ModeContext'


function Home() {
  
  return (
    <>
      <ModeProvider>
        <Header />
        <HomePage />
      </ModeProvider>
    </>
  )
}

export default Home;