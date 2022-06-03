import react from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';

function Dateformat({dateset}) {
    let [date1, setDate1] = useState('');

    function localCity(e) {
        setDate1(e.target.value);
        dateset(`date`, e.target.value);
    }

    return (
        <div className='col' onSelect={(e)=>localCity(e)}>
            <label> Date </label>
            <input type='date' className="form-control input-lg" />
        </div>
    )
}

export default Dateformat


