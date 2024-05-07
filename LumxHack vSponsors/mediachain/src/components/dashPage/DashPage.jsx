import './DashPage.css'
import dash from '../../images/dash.png'
import ModeContext from '../switchButton/ModeContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function Dash() {
    const { language } = useContext(ModeContext);

    const text = language === 'en' ? {
        example: 'Example for a musical artist',
    } : { 
        example: 'Exemplo para um músico',
    }

    return(
        <>
            <div className='dash'>
                <p>{text.example}</p>
                
                <img src={dash} alt="dash-example" class="dash-img" />
            </div>
        </>
    );
}

export default Dash;