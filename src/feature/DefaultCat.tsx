import React from 'react'

interface CatProps {
  catName: string,
  eyeColor: string,
  age: number
}

export class CatComponent extends React.Component<CatProps, any> {
  constructor(props: any) {
    super(props)
  }

  static defaultProps = {
    catName: 'Sandy',
    eyeColor: 'deepblue',
    age: '120'
  }

  render() {
    return <div>
      <table style={{'borderCollapse': 'collapse'}}>
        <thead>
        <th style={{'border': 'solid 1px red'}}>catName</th>
        <th style={{'border': 'solid 1px red'}}>eyeColor</th>
        <th style={{'border': 'solid 1px red'}}>age</th>
        </thead>
        <tr>
          <td style={{'border': 'solid 1px red'}}>{this.props.catName}</td>
          <td style={{'border': 'solid 1px red'}}>{this.props.eyeColor}</td>
          <td style={{'border': 'solid 1px red'}}> {this.props.age}</td>
        </tr>
      </table>
    </div>
  }
}


