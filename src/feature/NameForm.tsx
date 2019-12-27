import React, {FormEvent} from 'react'

export class NameForm extends React.Component {
  input: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()
  }

  handleSubmit(event: FormEvent) {
    if (!this.input.current) return
    alert('A name was submitted: ' + this.input.current.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
