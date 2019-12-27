import React from 'react'

interface SquareProps {
  value: string,
  onClick: Function
}


export class Square extends React.Component<SquareProps, any> {

  constructor(props: Readonly<SquareProps>) {
    super(props)
    console.log('square.tsx!!')
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    )
  }
}
