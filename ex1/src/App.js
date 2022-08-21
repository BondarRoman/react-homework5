import './App.css';
import React, { Component } from 'react';
import LiveInput from './components/LiveInput';

class App extends Component {
  state={
    input1:'',
    input2:'',
    input3:'',
    text:''
  };

  inputHandler1(e){
   this.setState({input1:e});
  };

  inputHandler2(e){
    this.setState({input2:e});

   };

   inputHandler3(e){
    this.setState({input3:e});
   };

  showHandler(e){
    e.preventDefault();
    let t = this.state.input1+this.state.input2+this.state.input3;
    t = JSON.stringify(t);

    this.setState({text:t});
  };

  render() {
    return (
        <div className="App">
            <header className="App-header">
              <form>
                  <LiveInput inputHandler1={(e)=> this.inputHandler1(e)} inputValue={this.state.input1} />
                  <LiveInput inputHandler1={(e)=> this.inputHandler2(e)} inputValue={this.state.input2} />
                  <LiveInput inputHandler1={(e)=> this.inputHandler3(e)} inputValue={this.state.input3} /> 

                  <input onClick={(e)=>this.showHandler(e)} type='submit'></input>
              </form>
                <h1>{this.state.text}</h1>
            </header>
        </div>
    );
  };
};

export default App;

