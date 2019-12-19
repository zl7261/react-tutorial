import React from 'react'

interface SquareProps {
  value: string,
  onClick: Function
}

interface SquareState {
  value: number | null | string
}

export class Square extends React.Component<SquareProps,SquareState> {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
