import './App.css';
import Zipcode from './components/zipcode';
import Identificationupload from './components/identificationupload';
import Country from './components/country';
import Date from './components/date';
import State from './components/state';
import Mailingaddress1 from './components/mailingaddress1';
import Mailingaddress2 from './components/mailingaddress2';
import City from './components/city';
import Socialsecurity from './components/socialSecurity';
import { useState } from 'react';


function App() {
  let [city1, setCity1] = useState('');
  let [zipcode1, setZipcode1] = useState('');
  let [country1, setCountry] = useState('');
  let [mailadd1, setmailadd1] = useState('');
  let [mailadd2, setmailadd2] = useState('');
  let [socialsec, setsocialsec] = useState('');
  let [date, setDate] = useState('');
  let [state, setState] = useState('');

  let verifyArry = [];
  let submitForm = {};

  function formValues(compName, inValue) {
    if(compName === `city`){
    setCity1(inValue);
    }
    else if(compName ==='zipcode'){
    setZipcode1(inValue);
    }
    else if(compName === `counry`)
    {
    setCountry(inValue);
    }
    else if(compName === 'mailaddr1')
    {
    setmailadd1(inValue);
    }
    else if(compName === 'mailaddr2')
    {
    setmailadd2(inValue);
    }
    else if(compName === 'socialsec'){
    setsocialsec(inValue);
    }
    else if(compName === 'date')
    {
    setDate(inValue);
    }
    else if(compName === 'state'){
    setState(inValue);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('city1', city1);
    localStorage.setItem('zipcode1', zipcode1);
    localStorage.setItem('country1', country1);
    localStorage.setItem('mailadd1', mailadd1);
    localStorage.setItem('mailadd2', mailadd2);
    localStorage.setItem('socialsec', socialsec);
    localStorage.setItem('date', date);
    localStorage.setItem('state', state);
    submitForm = {
      city: city1,
      country: country1
    }

    let currenAry = [];
    currenAry = JSON.parse(localStorage.getItem("verifyArry") || "[]");
    console.log(currenAry);
    let updatedAry = [...currenAry, submitForm];
    // console.log(updatedAry);
    localStorage.setItem('verifyArry',JSON.stringify(updatedAry));
  }

  function getValidityData(){
    const validData = JSON.parse(localStorage.getItem("verifyArry"));
    const listItems = validData.map((d,id) =>{
    <ul key={id}>
      <li>{d.mailaddr1}</li>
      <li>{d.mailaddr2}</li>
      <li>{d.city}</li>
      <li>{d.state}</li>
      <li>{d.zipcode1}</li>
      <li>{d.country1}</li>
      <li>{d.date}</li>
      <li>{d.socialsec}</li>
    </ul>
  });
    // console.log(listItems);
    return (
      <div>
        {listItems}
      </div>
    );
  }
  return (
    <div className="form-group">
      <div className="container">
        <div className="row d-flex flex-column">
          <form >
            <div className="row">
              < Mailingaddress1 addmail1={formValues} />
              < Mailingaddress2 addmail2={formValues} />
            </div>
            <div className="row">
              < City cityset={formValues} />
              < State stateset={formValues}/>
              < Zipcode setZipcode={formValues} />
              < Country countryset={formValues} />
            </div>
            <div className="row">
              < Date dateset={formValues}/>
              < Socialsecurity socialset={formValues} />
              < Identificationupload />
            </div>
            <div className="row">
              <div className='col'>
                <input className="btn btn-primary" type='button' value='Submit' id='submit' onClick={onSubmit} />
              </div>
              <div className='col'>
                <input className="btn btn-primary" type='button' value='Get Data' id='getData' onClick={getValidityData} />
              </div>
            </div>
          </form>
          <getValidityData />
        </div>
      </div>
    </div>
  )
}

export default App;
