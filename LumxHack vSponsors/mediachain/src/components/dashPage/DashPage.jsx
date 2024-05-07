import './DashPage.css'
import dash from '../../images/dash.png'
import { Link } from 'react-router-dom'

function Dash() {
    return(
        <>
            <div className='dash'>
                <p>Example for a musical artist</p>
                
                <img src={dash} alt="dash-example" class="dash-img" />
            </div>
        </>
    );
}

export default Dash;