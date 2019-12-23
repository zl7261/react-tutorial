import React from 'react'

interface TimerProp {
  step: number
}

interface TimerState {
  seconds: number
  step: number
}


export class StepTimer extends React.Component<TimerProp, TimerState> {
  private interval: NodeJS.Timer

  constructor(props: TimerProp, interval: NodeJS.Timer) {
    super(props)
    this.interval = interval
    this.state = {
      seconds: 0,
      step: -1
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

  render() {
    if (this.props.step !== this.state.step) {
      this.setState(state => ({
        seconds: 0,
        step: this.props.step
      }))
    }
    return (
      <div>
        <p>
          Steps:{this.state.step + 1}
          &nbsp;&nbsp;&nbsp;&nbsp;
          Seconds: {this.state.seconds}
        </p>
      </div>
    )
  }
}
