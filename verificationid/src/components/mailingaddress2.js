import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function Mailingaddress2({ addmail2 }) {
    let [mailadd2, setmailadd2] = useState('');


    function mailingadd2(e) {
        setmailadd2(e.target.value);
        addmail2(`mailaddr2`,e.target.value);
    }

    return (
        <div className="col">
            <label htmlFor="inputPassword4">Mailing Address Line2</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="Mailing Address" onInput={(e) => mailingadd2(e)} />
        </div>
    )
}

export default Mailingaddress2