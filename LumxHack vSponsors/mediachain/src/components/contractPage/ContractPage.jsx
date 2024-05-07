import './ContractPage.css'
import ModeContext from '../switchButton/ModeContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function Contract() {
    const { language } = useContext(ModeContext);

    const text = language === 'en' ? {
        example: 'Frontend to be implemented',
    } : { 
        example: 'Frontend a ser implementado',
    }

    return(
        <>
            <div className="to-be-announced">{text.example}</div>
        </>
    );
}

export default Contract;