import react from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';

function City({ cityset }) {
    let [city1, setCity1] = useState('');


    function localCity(e) {
        setCity1(e.target.value);
        cityset(`city`, e.target.value);
    }

    return (
        <div className='col'>
            <label>City
                <input type='text' className="form-control input-lg" value={city1} onChange={(e) => localCity(e)} />
            </label>
        </div>
    )
}

export default City