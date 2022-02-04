import "../src/css.scss";
import TextField from "@material-ui/core/TextField";
import { Component } from "react";
import Age from "./components/Age";

class App extends Component {
  constructor(){
    super();
    this.state = {
      newDate:"",
      dob:"2000-04-07",
      showAge: false
    };
  }
  
 age=()=>{
      this.setState({
        dob:this.state.dob , showAge:true
      })
      console.log(this.state);
  }
  render(){
    return (
      <div className="app">
        <div className="field">
          {this.state.showAge ? (
            <h4 className="birText" style={{color:'red'}}>
              <Age date ={this.state.dob} />
            </h4>
          ): (" ")}
          <br/>
          <h3>Enter DOB</h3><br/>
          <TextField
            id="date"
            type="date"
            defaultValue="2000-04-07"
            onChange={
              e=>this.setState({dob:e.target.value})
            }
            InputLabelProps={{
              shrink: true,
            }}
          /><br/>
        <button className="btn" onClick={()=>this.age()} >Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
