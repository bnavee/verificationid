import react, { useState } from 'react';
import reactDOM from 'react-dom';

function Country({ countryset }) {
    let [countr1, setCountry1] = useState('');

    function localCity(e) {
        setCountry1(e.target.value);
        countryset(`country`, e.target.value);
    }

    return (
        <div className='col' onSelect={(e)=>localCity(e)}>
            <label>Country
                <select className="form-control">
                    <option>India</option>
                    <option>USA</option>
                </select>
            </label>
        </div>
    )
}

export default Country