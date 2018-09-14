import React, { Component } from 'react';
import Appcss from './App.css';
class App extends Component {
  constructor(props) {
	      super(props);
	      this.state =null;

	       this.handleClick = this.handleClick.bind(this);
	   }

 handleClick() {
	 console.log("hi");
 }

  render() {
    return (
      <div className="App">
	    <div className="result">
              result
	    </div>
	   <div className="row">
	      <div className="col-sm-3 cal-col">AC</div>
	      <div className="col-sm-3 cal-col">+/-</div>
              <div className="col-sm-3 cal-col">%</div>
              <div className="col-sm-3 cal-col">/</div>

	    </div>
            <div className="row">
	      <div className="col-sm-3 cal-col" onClick={this.handleClick}>7</div>
	      <div className="col-sm-3 cal-col" onClick={this.handleClick}>8</div>
              <div className="col-sm-3 cal-col" onClick={this.handleClick}>9</div>
              <div className="col-sm-3 cal-col">*</div>

	    </div>
            <div className="row">
	      <div className="col-sm-3 cal-col"onClick={this.handleClick}>4</div>
	      <div className="col-sm-3 cal-col"onClick={this.handleClick}>5</div>
              <div className="col-sm-3 cal-col"onClick={this.handleClick}>6</div>
              <div className="col-sm-3 cal-col">-</div>

	    </div>
            <div className="row">
	      <div className="col-sm-3 cal-col"onClick={this.handleClick}>1</div>
	      <div className="col-sm-3 cal-col"onClick={this.handleClick}>2</div>
              <div className="col-sm-3 cal-col"onClick={this.handleClick}>3</div>
              <div className="col-sm-3 cal-col">+</div>
	       <div className="row">
	      <div className="col-sm-6 cal-col"onClick={this.handleClick}>0</div>
              <div className="col-sm-3 cal-col">.</div>
              <div className="col-sm-3 cal-col">=</div>

	    </div>

	    </div>
      </div>
    );
  }
}

export default App;
