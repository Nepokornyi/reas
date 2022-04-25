import React from 'react';
import axios from 'axios';

import './index.css';

class App extends React.Component{

  state = {
    estate: 'byt',
    region: 'praha',
  };

  // FUNCTIONS
  handleChange = ({target}) =>{
    const { name, value } = target;
    this.setState({[name]:value});
  };

  submit = (event) =>{
    event.preventDefault();

    const payload = {
      estate: this.state.estate,
      region: this.state.region,
      fullname: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
    };

    axios({
      url:'http://localhost:3000/lead/chci-nabidku',
      method: 'POST',
      data: payload
    })
    .then(() =>{
      console.log('Data has been sent');
      this.resetInputs();
    })
    .catch(() =>{
      console.log('Internal error');
    });
  }

  resetInputs = () =>{
    this.setState({fullname:'', phone:'', email:''});
  }


  // STYLING
  continueButton = (event) =>{
    event.preventDefault();

    const submitB = document.getElementById('submitButton');
    const backB = document.getElementById('backButton');
    const continueB = document.getElementById('continueButton');

    const revealsContinue = document.querySelectorAll('.revealContinue');
    const revealsBack = document.querySelectorAll('.revealBack');

    for(let i = 0; i < revealsContinue.length; i++){
      revealsContinue[i].classList.remove('hidden');
    }
    for(let i = 0; i < revealsBack.length; i++){
      revealsBack[i].classList.add('hidden');
    }

    submitB.classList.remove('hidden');
    backB.classList.remove('hidden');
    continueB.classList.add('hidden');
  }
  backButton = (event) =>{
    event.preventDefault();

    const submitB = document.getElementById('submitButton');
    const backB = document.getElementById('backButton');
    const continueB = document.getElementById('continueButton');

    const revealsContinue = document.querySelectorAll('.revealContinue');
    const revealsBack = document.querySelectorAll('.revealBack');

    for(let i = 0; i < revealsContinue.length; i++){
      revealsContinue[i].classList.add('hidden');
    }
    for(let i = 0; i < revealsBack.length; i++){
      revealsBack[i].classList.remove('hidden');
    }

    submitB.classList.add('hidden');
    backB.classList.add('hidden');
    continueB.classList.remove('hidden');
  }

  // ------------------

  render(){
    console.log('State ', this.state);
    //JSX
    return(
      <div className='main-container'>

        <form noValidate>
          <div className="form-input revealBack">
            <label>Typ nemovitosti‍</label>
              <select name="estate" value={this.state.estate} onChange={this.handleChange}>
                <option value="byt">Byt</option>
                <option value="dům">Dům</option>
                <option value="pozemek">Pozemek</option>
              </select>
          </div>
          <div className="form-input revealBack">
            <label>Kraj</label>
            <select name="region" value={this.state.region} onChange={this.handleChange}>
              <option value="praha">Hlavní město Praha</option>
              <option value="stredocesky">Středočeský kraj</option>
              <option value="jihocesky">Jihočeský kraj</option>
              <option value="plzensky">Plzeňský kraj</option>
              <option value="karlovarsky">Karlovarský kraj</option>
              <option value="ustecky">Ústecký kraj</option>
              <option value="liberecky">Liberecký kraj</option>
              <option value="kralovehradecky">Královéhradecký kraj</option>
              <option value="pardubicky">Pardubický kraj</option>
              <option value="vysocina">Kraj Vysočina</option>
              <option value="jihomoravsky">Jihomoravský kraj</option>
              <option value="olomoucky">Olomoucký kraj</option>
              <option value="moravskoslezsky">Moravskoslezský kraj</option>
              <option value="zlinsky">Zlínský kraj</option>
            </select>
          </div>

          <div className="form-input hidden revealContinue">
            <label>Vaše jméno</label>
            <input type="text" placeholder='Vadym Kostucok' name="fullname" value={this.state.fullname} onChange={this.handleChange} />
          </div>
          <div className="form-input hidden revealContinue">
            <label>Tel. číslo</label>
            <input type="tel" placeholder='774153845' name="phone" value={this.state.phone} onChange={this.handleChange} />
          </div>
          <div className="form-input hidden revealContinue">
            <label>Email</label>
            <input type="email" placeholder='vadym.kostucok@gmail.com' name="email" value={this.state.email} onChange={this.handleChange} />
            <span>{this.state.error}</span>
          </div> 
          <div className='menu'>
            <button id="continueButton" onClick={this.continueButton}>Pokračovat</button>
            <button id="backButton" className='hidden' onClick={this.backButton}>Zpět</button>
            <button id="submitButton" value='Odeslat' className='hidden' onClick={this.submit}>Odeslat</button>
          </div>

        </form>

      </div>
    );   
  }

}

export default App;