import './App.css'
import Header from '../header/Header.jsx'
import { Outlet } from "react-router-dom";
import { ModeProvider } from '../switchButton/ModeContext';


function App() {
  
  return (
    <>
      <ModeProvider>
        <Header />
        <Outlet />
      </ModeProvider>
    </>
  )
}

export default App;
