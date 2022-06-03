import react from 'react';
import reactDOM from 'react-dom';

function identifycationupload() {

    return (
        <div className="col">
            <div> Select an Identification to UPload
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Drivers-Licence" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Driver's Licence</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="State-Issued-ID" />
                    <label className="form-check-label" htmlFor="inlineRadio2">State Issued ID</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Passport" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Passport</label>
                </div>
            </div>
        </div>
    )
}

export default identifycationupload