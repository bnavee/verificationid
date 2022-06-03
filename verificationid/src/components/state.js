import react from 'react';
import reactDOM from 'react-dom';

function state() {
    return (
        <div className='col'>
            <label>State
                <select className="form-control input-lg">
                    <option type='text' >California</option>
                    <option type='text' >New Jersi</option>
                </select>
            </label>
        </div>
    )
}

export default state