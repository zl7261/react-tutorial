import React from 'react'

export class Table extends React.Component<any, any> {
  render() {
    return (
      <table>
        <tbody>
        <tr>
          <Columns/>
        </tr>
        </tbody>
      </table>
    )
  }
}

class Columns extends React.Component<any, any> {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    )
  }
}
