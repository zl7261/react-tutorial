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

