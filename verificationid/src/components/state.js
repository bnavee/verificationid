import react from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';

function State({stateset}) {
    let [state1, setState1] = useState('');

    function localCity(e) {
        setState1(e.target.value);
        stateset(`state`, e.target.value);
    }

    return (
        <div className='col' onSelect={(e)=>localCity(e)}>
            <label>State
                <select className="form-control input-lg">
                    <option type='text' >California</option>
                    <option type='text' >New Jersi</option>
                </select>
            </label>
        </div>
    )
}

export default State