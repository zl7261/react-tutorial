import React, {ChangeEvent} from 'react'
import {Board} from './Board'
import {StepTimer} from './StepTimer'
import classNames from 'classnames'

interface GameHistory {
  squares: string[]
  hover: boolean
}

type Winner = string | null

interface GameState {
  history: GameHistory[],
  stepNumber: number
  xIsNext: boolean
  reverseHistory: boolean
  step: number
  inputValue: string
}

export class Game extends React.Component<any, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(''),
        hover: false
      }],
      stepNumber: 0,
      xIsNext: true,
      reverseHistory: false,
      step: 0,
      inputValue: 'Hello Word!'
    }
  }

  handleClick = (i: number) => {
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
      xIsNext: !this.state.xIsNext,
      step: this.state.step + 1
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

  reverseHistory = () => {
    this.setState(state => ({
        reverseHistory: !state.reverseHistory
      })
    )
  }

  renderFullTitle(winner: Winner): { text: string, status: string } {
    let text, status
    if (winner) {
      text = 'Winner'
      status = winner
    } else {
      text = 'Next player'
      status = this.state.xIsNext ? 'X' : 'O'
    }
    return {text, status}
  }

  renderHistory = (history: GameHistory[], reverseHistory: boolean) => {
    return history.map((steps, index) => {
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
                {
                  context += `  `
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
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const history = this.state.history
    const reverseHistory = this.state.reverseHistory
    const current = history[this.state.stepNumber]

    const moves = this.renderHistory(history, reverseHistory)
    const winner = calculateWinner(current.squares)
    let fullTitle = this.renderFullTitle(winner)

    return (
      <div className="game">
        <input type="text"
               onChange={this.handleChange}
               placeholder='请输入值'/>
        {this.state.inputValue}


        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={this.handleClick}
          />
        </div>
        <div className="game-info">
          <StepTimer step={this.state.step}/>
          <div>
            {fullTitle.text}
            <span style={{color: 'red'}}>{fullTitle.status}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.reverseHistory}>reverseHistory</button>
          </div>
          <ol className={reverseHistory ? 'ol-reverse' : ''}>{moves}</ol>
        </div>
      </div>
    )
  }
}

const Win_Line = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
export const calculateWinner = (squares: string[]): Winner => {
  for (let i = 0; i < Win_Line.length; i++) {
    const [a, b, c] = Win_Line[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  if (!squares.includes('')) {
    console.log(squares)
    return 'none'
  }

  return null
}

