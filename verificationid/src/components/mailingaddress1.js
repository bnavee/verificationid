import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function Mailingaddress1({ addmail1 }) {
  let [mailadd1, setmailadd1] = useState('');


  function mailingadd1(e) {
    setmailadd1(e.target.value);
    addmail1(`mailaddr1`,e.target.value);
  }
  return (
    <div className="col">
      <label htmlFor="inputEmail4">Mailing Address Line1</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Mailing details" onInput={(e) => mailingadd1(e)} />
    </div>
  )
}

export default Mailingaddress1