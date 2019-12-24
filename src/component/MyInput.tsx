import React, {ChangeEvent} from 'react'

interface InputState {
  value: string
}

export class MyInput extends React.Component<any, InputState> {

  constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text"
               onChange={this.handleChange}
               placeholder='请输入值'/>
        input value: `{this.state.value}`
      </div>
    )

  }

}
