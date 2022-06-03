import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Zipcode({ setZipcode }) {
    let [zipchange, setZipchange] = useState('');
    if ((zipchange.length >= 5)) {
        alert('Check your Zip code');
    }

    function localZip(e) {
        setZipchange(e.target.value);
        setZipcode(`zipcode`, e.target.value);
    }
    return (
        <div className='col' onChange={(e) => localZip(e)}>
            <label>ZipCode
                <input type='number' className="form-control input-lg" />
            </label>
        </div>
    )
}

export default Zipcode