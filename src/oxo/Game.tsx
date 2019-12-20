import React from 'react'
import {Board, calculateWinner} from './Board'
import classNames from 'classnames'

interface GameState {
  history: {
    squares: string[]
    hover: boolean
  }[],
  stepNumber: number
  xIsNext: boolean
  reverseHistory: boolean
}

export class Game extends React.Component<any, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        hover: false
      }],
      stepNumber: 0,
      xIsNext: true,
      reverseHistory: false
    }
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares,
        hover: false
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(index: number) {
    this.setState({
      stepNumber: index,
      xIsNext: (index % 2) === 0
    })
  }

  historyOnMouseOver(index: number) {
    let history = this.state.history
    history[index].hover = true
    this.setState({
      history: history
    })
  }

  historyOnMouseLeave(index: number) {
    let history = this.state.history
    history[index].hover = false
    this.setState({
      history: history
    })
  }

  reverseHistory() {
    let reverseHistory = this.state.reverseHistory
    this.setState({
      reverseHistory: !reverseHistory
    })
  }

  render() {
    const history = this.state.history
    const reverseHistory = this.state.reverseHistory
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((steps, index) => {
      const desc = index ? 'Go to index #' + index : 'Go to game start'

      let liClass = classNames({
        'history-hover': steps.hover,
        'li-reverse': reverseHistory
      })

      return (
        <li key={'game_history_' + index}
            className={liClass}
            onMouseOver={() => this.historyOnMouseOver(index)}
            onMouseLeave={() => this.historyOnMouseLeave(index)}
        >
          <button onClick={() => this.jumpTo(index)}>
            {desc}
          </button>
          <span>
          {steps.squares.map((step, index) => {
              let column = (index % 3) + 1
              let context = `${column}列:${step ? step : '空'}  `

              if (column === 1) {

                // eslint-disable-next-line no-lone-blocks
                {/**todo  换行*/
                }

                let row = parseInt((index / 3).toString()) + 1
                context = `${row}行 ${context}`
              }
              return context
            }
          )}
          </span>
        </li>
      )
    })

    let text, status
    if (winner) {
      text = 'Winner'
      status = winner
    } else {
      text = 'Next player'
      status = this.state.xIsNext ? 'X' : 'O'
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>
            {text}
            <span style={{color: 'red'}}>{status}</span>
            <button onClick={() => this.reverseHistory()}>reverseHistory</button>
          </div>
          <ol className={reverseHistory ? 'ol-reverse' : ''}>{moves}</ol>
        </div>
      </div>
    )
  }


}
