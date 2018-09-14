import React, { Component } from 'react';
import Appcss from './App.css';
class App extends Component {
  constructor(props) {
	      super(props);
	      this.state ={
          val1:0,
          val2:0,
          opp:null,
          res:0
        }
      	       this.handleClick = this.handleClick.bind(this);
	   }

 handleClick(e) {
   let val2=this.state.val2;
   let val1=this.state.val1;
   let opp=this.state.opp;
   let result=this.state.res;
   if(opp===null &&(e.target.value!='+'||e.target.value!='-'||e.target.value!='*'||e.target.value!='/')){
     val1=val1*10+parseInt(e.target.value);
     this.setState({val1:val1});
     console.log(val1);
   }
   else {
     console.log(e.target.value);
    if(opp==null && (e.target.value=='+'||e.target.value=='-'||e.target.value=='*'||e.target.value=='/') ){
      opp=e.target.value;
      this.setState({val1:val1});
      console.log(opp);
    }
   }
   //console.log(val1);
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
	      <div className="col-sm-3 cal-col"><button className="btn" value={7} onClick={this.handleClick}>7</button></div>
	      <div className="col-sm-3 cal-col"><button className="btn" value={8} onClick={this.handleClick}>8</button></div>
              <div className="col-sm-3 cal-col" onClick={this.handleClick}>9</div>
              <div className="col-sm-3 cal-col"><button className="btn" value='*' onClick={this.handleClick}>*</button></div>

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
