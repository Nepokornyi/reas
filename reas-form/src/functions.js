import axios from 'axios';

export function handleChange({target}){
    const { name, value } = target;
    this.setState({[name]:value});
  };

export function submit(event){
    event.preventDefault();

    const payload = {
      nemovitost: this.state.nemovitost,
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

export function resetInputs(){
    this.setState({nemovitost:''});
  };