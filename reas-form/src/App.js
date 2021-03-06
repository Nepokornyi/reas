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
            <label>Typ nemovitosti???</label>
              <select name="estate" value={this.state.estate} onChange={this.handleChange}>
                <option value="byt">Byt</option>
                <option value="d??m">D??m</option>
                <option value="pozemek">Pozemek</option>
              </select>
          </div>
          <div className="form-input revealBack">
            <label>Kraj</label>
            <select name="region" value={this.state.region} onChange={this.handleChange}>
              <option value="praha">Hlavn?? m??sto Praha</option>
              <option value="stredocesky">St??edo??esk?? kraj</option>
              <option value="jihocesky">Jiho??esk?? kraj</option>
              <option value="plzensky">Plze??sk?? kraj</option>
              <option value="karlovarsky">Karlovarsk?? kraj</option>
              <option value="ustecky">??steck?? kraj</option>
              <option value="liberecky">Libereck?? kraj</option>
              <option value="kralovehradecky">Kr??lov??hradeck?? kraj</option>
              <option value="pardubicky">Pardubick?? kraj</option>
              <option value="vysocina">Kraj Vyso??ina</option>
              <option value="jihomoravsky">Jihomoravsk?? kraj</option>
              <option value="olomoucky">Olomouck?? kraj</option>
              <option value="moravskoslezsky">Moravskoslezsk?? kraj</option>
              <option value="zlinsky">Zl??nsk?? kraj</option>
            </select>
          </div>

          <div className="form-input hidden revealContinue">
            <label>Va??e jm??no</label>
            <input type="text" placeholder='Vadym Kostucok' name="fullname" value={this.state.fullname} onChange={this.handleChange} />
          </div>
          <div className="form-input hidden revealContinue">
            <label>Tel. ????slo</label>
            <input type="tel" placeholder='774153845' name="phone" value={this.state.phone} onChange={this.handleChange} />
          </div>
          <div className="form-input hidden revealContinue">
            <label>Email</label>
            <input type="email" placeholder='vadym.kostucok@gmail.com' name="email" value={this.state.email} onChange={this.handleChange} />
            <span>{this.state.error}</span>
          </div> 
          <div className='menu'>
            <button id="continueButton" onClick={this.continueButton}>Pokra??ovat</button>
            <button id="backButton" className='hidden' onClick={this.backButton}>Zp??t</button>
            <button id="submitButton" value='Odeslat' className='hidden' onClick={this.submit}>Odeslat</button>
          </div>

        </form>

      </div>
    );   
  }

}

export default App;