import React from 'react'

interface StateState {
  originalCount: number
  functionalCount: number
}

export class MyState extends React.Component<any, StateState> {


  constructor(props: Readonly<any>) {
    super(props)
    this.state = {
      originalCount: 0,
      functionalCount: 0
    }
  }

  addOriginalCountByFunction = () => {
    this.setState(state => (
      {
        originalCount: state.originalCount + 1
      }
    ))
    this.setState(state => (
      {
        originalCount: state.originalCount + 1
      }
    ))
  }

  addOriginalCountByOrigin = () => {
    this.setState({
      originalCount: this.state.originalCount + 1
    })
    this.setState({
      originalCount: this.state.originalCount + 1
    })
  }

  addFunctionalCountByFunction = async () => {
    await this.setState(state => (
      {
        functionalCount: state.functionalCount + 1
      }
    ))
    await this.setState(state => (
      {
        functionalCount: state.functionalCount + 1
      }
    ))
  }

  addFunctionalCountByOrigin = () => {
    this.setState({
      functionalCount: this.state.functionalCount + 1
    })
    this.setState({
      functionalCount: this.state.functionalCount + 1
    })
  }

  componentDidMount(): void {
    this.addOriginalCountByOrigin()
    this.addOriginalCountByFunction()

    this.addFunctionalCountByFunction().then(() => this.addFunctionalCountByOrigin())

  }

  render() {
    return (
      <div>
        originalCount:{this.state.originalCount}
        &nbsp;&nbsp;&nbsp;&nbsp;
        functionalCount:{this.state.functionalCount}
      </div>
    )
  }

}
