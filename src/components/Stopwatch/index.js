// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {count: 0}

  increaseCount = () => {
    console.log('calling')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  cancelInterval = () => clearInterval(this.id)

  onClickReset = () => {
    this.cancelInterval()
    this.setState({count: 0})
  }

  onClickStop = () => {
    this.cancelInterval()
  }

  onClickStart = () => {
    this.id = setInterval(this.increaseCount, 1000)
  }

  render() {
    const {count} = this.state
    const min = Math.floor(count / 60)
    const sec = Math.floor(count % 60)
    const minString = min > 9 ? min : `0${min}`
    const secString = sec > 9 ? sec : `0${sec}`
    const timer = `${minString}:${secString}`

    return (
      <div className="bg">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card">
          <div className="heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="logo"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{timer}</h1>
          <div className="btns-container">
            <button
              type="button"
              className="btn start"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
