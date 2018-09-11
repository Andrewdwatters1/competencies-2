import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stuff: 'things', 
      user: 0,
      login: '',
      input: ''
    }
  }
  login = () => {
    let password = this.state.input;
    axios.get(`/api/login?password=${password}`).then(result => {
      console.log(result);
      this.setState({
        user: result.data,
        login: result.data,
        input: ''
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return(
      <div>
        Icons
        <Link to="/nope"><button>Proof that I know how routing works</button></Link>
        <form>
          Password? <input placeholder="hint: it's password" onChange={this.handleChange}/>
          <button onClick={this.login}>Click here to login</button>
        </form>
        <p>{this.state.user ? this.state.login : null}</p>
      </div>
    )
  }
}

export default Icons;