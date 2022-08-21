import './App.scss';
import React, { Component } from 'react';
import LiveInput from './components/LiveInput';

class App extends Component {
  state={
    input1:'',
    input2:'',

    text1:'',
    text2:'',

    text3:'',
    text4:''

  };

  inputHandler1(e){
   this.setState({input1:e});
  }
  inputHandler2(e){
    this.setState({input2:e});
   }
   
  showHandler(e){
    e.preventDefault();

    this.setState({text1:this.state.input1*0.5});
    this.setState({text2:this.state.input1*0.05});

    this.setState({text3:this.state.input2*0.5});
    this.setState({text4:this.state.input2*0.05});
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <form>
            <LiveInput inputHandler1={(e)=> this.inputHandler1(e)} inputValue={this.state.input1} />
            <LiveInput inputHandler1={(e)=> this.inputHandler2(e)} inputValue={this.state.input2} />

            <input onClick={(e)=>this.showHandler(e)} type='submit'></input>
        </form>
          <div className='input1'>
            <h1>INPUT1</h1>
                <div>
                    <h2>Первое значение:{this.state.text1}</h2>
                    <h2>Второе значение:{this.state.text2}</h2>
                </div>
          </div>

        <div className='input2'>
        <h1 >INPUT2</h1>
            <div>
                <h2>Первое значение:{this.state.text3}</h2>
                <h2>Второе значение:{this.state.text4}</h2>
            </div>
        </div>
      </header>
    </div>
    );
  };
};

export default App;

