/*
List Item
*/
import React  from 'react'

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <li className="ListItem">
        <span className="ListItem-quantity" aria-hidden="true">{this.props.item.quantity}</span>
        <span className="ListItem-name" aria-hidden="true">{this.props.item.name}</span>
      </li>
    );
  }
}

export default ListItem