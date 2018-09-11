import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nope extends Component {
  render() {
    return (
      <div>
        {
          this.props.match.path === '/nope' ?
            <div>
              There's nothing here... you should go back.
            <Link to="/"><button>Go back</button></Link>
            </div>
            :
            null
        }
      </div>
    )
  }
}