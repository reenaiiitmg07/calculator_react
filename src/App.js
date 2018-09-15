import React, { Component } from 'react';
import Appcss from './App.css';
class App extends Component {
  constructor(props) {
	      super(props);
	      this.state ={
          val1:0,
          val2:0,
          opp:null,
          res:null
        }
      	       this.handleClick = this.handleClick.bind(this);
               this.handleResult=this.handleResult.bind(this);
               this.allClear=this.allClear.bind(this);
	   }

allClear(e){
  this.setState({
    val1:0,
    val2:0,
    opp:null,
    res:null
  });
}
handleResult(e){
 let val1=this.state.val1;
 let val2=this.state.val2;
 let opp=this.state.opp;
 let res;
 console.log(val1);
 console.log(val2);
 console.log(opp);

 if(opp==='*')
 {
   res=val1*val2;

 }
 else if(opp==='+'){
   res=val1+val1;
 }
 else if(opp=='-'){
   res=val1-val2;
 }
 else {
   res=val1/val2;
 }
 this.setState({res:res});
 console.log(res);
 //console.log(res);
}

 handleClick(e) {
   let val1=this.state.val1;
   let val2=this.state.val2;
   let opp=this.state.opp;
   let result=this.state.res;
   if(opp===null &&(e.target.value!='+' && e.target.value!='-'&&e.target.value!='*'&&e.target.value!='/')){
     val1=val1*10+parseInt(e.target.value);
     this.setState({val1:val1});
     //console.log(val1);
   }
   else {
    if(opp==null && (e.target.value=='+'||e.target.value=='-'||e.target.value=='*'||e.target.value=='/') ){
      opp=e.target.value;
      this.setState({opp:opp});
      //console.log(opp);
    }
    else{
      val2=val2*10+parseInt(e.target.value);
      this.setState({val2:val2});
      //console.log(val2);
    }
   }
   //console.log(val1);
 }

  render() {
    let res=this.state.res;
    let opp=this.state.opp;
    let val1=this.state.val1;
    let val2=this.state.val2;
    return (
      <div className="App">
	    <div className="result">
       {res>0?res:opp?val2:val1}
	    </div>
	   <div className="row">
	      <div className="col-sm-3 cal-col"><button className="btn" onClick={this.allClear}>AC</button></div>
	      <div className="col-sm-3 cal-col">+/-</div>
              <div className="col-sm-3 cal-col">%</div>
              <div className="col-sm-3 cal-col"><button className="btn"value='/' onClick={this.handleClick}>/</button></div>

	    </div>
            <div className="row">
	      <div className="col-sm-3 cal-col"><button className="btn" value={7} onClick={this.handleClick}>7</button></div>
	      <div className="col-sm-3 cal-col"><button className="btn" value={8} onClick={this.handleClick}>8</button></div>
        <div className="col-sm-3 cal-col"><button className="btn"value={9} onClick={this.handleClick}>9</button></div>
        <div className="col-sm-3 cal-col"><button className="btn" value='*' onClick={this.handleClick}>*</button></div>

	    </div>
            <div className="row">
	      <div className="col-sm-3 cal-col"><button className="btn"value={4} onClick={this.handleClick}>4</button></div>
	      <div className="col-sm-3 cal-col"><button className="btn"value={5} onClick={this.handleClick}>5</button></div>
        <div className="col-sm-3 cal-col"><button className="btn"value={6} onClick={this.handleClick}>6</button></div>
        <div className="col-sm-3 cal-col"><button className="btn"value='-' onClick={this.handleClick}>-</button></div>

	    </div>
      <div className="row">
	      <div className="col-sm-3 cal-col"><button className="btn"value={1} onClick={this.handleClick}>1</button></div>
	      <div className="col-sm-3 cal-col"><button className="btn"value={2} onClick={this.handleClick}>2</button></div>
        <div className="col-sm-3 cal-col"><button className="btn"value={3} onClick={this.handleClick}>3</button></div>
        <div className="col-sm-3 cal-col"><button className="btn"value='+' onClick={this.handleClick}>+</button></div>
	       <div className="row">
	      <div className="col-sm-6 cal-col"><button className="btn"value={0} onClick={this.handleClick}>0</button></div>
              <div className="col-sm-3 cal-col">.</div>
              <div className="col-sm-3 cal-col"><button className="btn"onClick={this.handleResult}>=</button></div>

	    </div>

	    </div>
      </div>
    );
  }
}

export default App;
