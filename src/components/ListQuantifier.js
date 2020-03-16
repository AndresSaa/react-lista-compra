/*
Quantifier
*/
import React  from 'react'

class ListQuantifier extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <small>Total de artículos: <strong>{this.props.quantity}</strong></small>
    );
  }
}

export default ListQuantifier