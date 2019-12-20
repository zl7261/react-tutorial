import React from 'react'
import {Square} from './Square'


interface BoardState {
  squares: string[]
  xIsNext: boolean
}

interface BoardProps {
  squares: string[]
  onClick: Function
}

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i: number) {
    return (
      <Square
        key={'game_square' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map(i => {
          return (
            <div key={'board-row-' + i}
                 className="board-row">
              {[0, 1, 2].map(j => {
                return this.renderSquare(3 * i + j)
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export function

calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
