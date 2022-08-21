import React, { Component } from 'react';

class LiveInput extends Component {
  inputHandler(e){
    this.props.inputHandler1(e.target.value);
  };
  render() {
    return (
      <>
      <input  value={this.props.inputValue} onChange={(e)=> this.inputHandler(e)} type='number'>
      </input>
      </>
    );
  };
};

export default LiveInput;