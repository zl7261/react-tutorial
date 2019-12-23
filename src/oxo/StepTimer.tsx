import React from 'react'

interface TimerProp {
  step: number
}

interface TimerState {
  seconds: number
}


export class StepTimer extends React.Component<TimerProp, TimerState> {
  interval!: NodeJS.Timer

  constructor(props: TimerProp, interval: NodeJS.Timer) {
    super(props)
    this.state = {
      seconds: 0
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  startTimer() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  clearTimer() {
    clearInterval(this.interval)
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  componentDidUpdate(prevProp: TimerProp) {
    if (this.props.step !== prevProp.step) {
      this.setState(state => ({
        seconds: 0
      }))
    }
  }

  render() {
    return (
      <div>
        <p>
          Steps:{this.props.step + 1}
          &nbsp;&nbsp;&nbsp;&nbsp;
          Seconds: {this.state.seconds}
        </p>
      </div>
    )
  }
}
