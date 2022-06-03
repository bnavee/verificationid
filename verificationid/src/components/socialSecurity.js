import react from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';

function Socialsecurity({ socialset }) {
    let [social, setSocial] = useState(0);
    if (((social.length > 4))) {
        alert('Check your Social code');
    }

    function socialsecur(e) {
        setSocial(e.target.value);
        socialset(`socialsec`,e.target.value);
    }

    return (
        <div className='col' onInput={(e) => socialsecur(e)}>
            <label> Social Security Last 4 </label>
            <input type='number' className="form-control input-lg" />

        </div>
    )
}

export default Socialsecurity