import React from 'react'
import {Square} from './Square'

export class Board extends React.Component {


  render() {
    const status = 'Next player: X'
    const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    return (
      <div>
        <div className="status">{status}</div>
        {
          arr.map(row => {
            return (
              <div className="board-row">
                {
                  row.map(column => {
                    return <Square value={column}/>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
