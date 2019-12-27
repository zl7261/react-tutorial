import React from 'react'

export class TableFragment extends React.Component<any, any> {
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
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    )
  }
}
