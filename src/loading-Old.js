import React, { Component } from 'react'
import { SolarSystemLoading } from 'react-loadingg'
import Afunja from './afunja'

class Loading extends Component {
    constructor(props) {
      super(props);
      this.state = {
        done: undefined
      };
    }
  
    componentDidMount() {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(json => this.setState({ done: true }));
      }, 1200);
    }
  
    render() {
      return (
        <div>
          {!this.state.done ? (
            <SolarSystemLoading color={""} />
          ) : (

            <Afunja />
            
          )}
        </div>
      );
    }
  }

  export default Loading;