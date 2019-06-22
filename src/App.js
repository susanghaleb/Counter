import React, {Component} from 'react';
import './App.css';


class Counter extends Component{
  state={
    count:0
  }

  handleIncrement=()=>{
    this.setState({
      count:this.state.count +1
    })
  }

  handleDecrement=()=>{
    this.setState({
      count:this.state.count -1
    })
  }
  render(){
    return(
      <div>
        <div>count: {this.state.count}</div>
         <button onClick={this.handleIncrement}>Incrementar</button>
         <button onClick={this.handleDecrement}>Decrementar</button>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return(
      <Counter></Counter>
    )
  }
}
export default App;
