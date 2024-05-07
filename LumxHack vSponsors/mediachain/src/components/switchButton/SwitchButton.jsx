import React, { useContext } from 'react'
import ModeContext from './ModeContext'
import './SwitchButton.css'


const SwitchButton = () => {
    const { language, toggleLanguage } = useContext(ModeContext)
  
    return (
        <label className="switch-button">
            <input type="checkbox" id="language-switch" onClick={toggleLanguage} checked={language === 'pt'}/>
            <div className={`slider ${language}`}>
                <div className="button"></div>
                <span className="label left">EN</span>
                <span className="label right">PT</span>
            </div>
        </label>
    );
};

export default SwitchButton;