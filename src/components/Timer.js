import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: props.duration || 30,
      time: props.duration || 30,
      started: false,
      interval: null,
      warning: 'It\'s time to make your play!'
    }
  }

  static getDerivedStateFromProps({ duration }, current_state) {
    if (current_state.duration !== duration) {
      return {
        duration,
        time: duration
      }
    }
    return null
  }

  clearTimer() {
    if (this.state.interval) window.clearInterval(this.state.interval)

    this.setState({
      started: false,
      time: this.state.duration
    })
  }

  restartTimer() {
    this.clearTimer()

    this.setState({
      started: true,
      time: this.state.duration
    })

    const intervalLength = 1000
    const interval = setInterval(() => {
      this.setState({ time: this.state.time - intervalLength/1000 })
    }, intervalLength);

    this.setState({ interval })
  }

  render() {
    return (
      <main>
        <h1
          className="timer"
          style={{ color: this.state.time < 0 ? 'orangered' : 'white' }}
        >{this.state.time}</h1>
        <p
          className="warning"
          style={{ visibility: this.state.time > 5 ? 'hidden' : 'visible'}}
        >{this.state.warning}</p>
        <button
          className="btn start"
          onClick={() => this.restartTimer() }
        >
          { this.state.started ? 'Next' : 'Start' }
        </button>
        <button
          className="btn stop"
          onClick={() => this.clearTimer()}
          style={{ display: this.state.started ? 'inline-block' : 'none' }}
        >
          Stop
        </button>
      </main>
    )
  }
}
