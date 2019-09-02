import React from 'react';
import './App.css';

import Timer from './components/Timer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { duration: 30 }
  }

  changeTimerDuration(duration) {
    this.setState({ duration })
  }

  render() {
    return (
      <div className="App">
        <Timer duration={this.state.duration} />
        <h2>Choose timer duration</h2>
        {[10, 20, 30, 45, 60, 90, 120].map((dur) => {
          return <button 
            key={dur}
            onClick={() => this.changeTimerDuration(dur)}
          >{dur}</button>
        })}
        <p>or enter a custom duration</p>
        <input type="text" placeholder="Enter duration"></input>
      </div>
    );
  }
}

export default App;
