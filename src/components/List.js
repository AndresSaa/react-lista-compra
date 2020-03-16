/*
List
*/
import React  from 'react'
import ListItem from './ListItem'

class List extends React.Component {
  render () {
    let items = this.props.items.map((item, index) => {
      return (
        <ListItem item={item} key={index}/>
      );
    });
    return (
      <ul className="List"> {items} </ul>
    );
  }
}

export default List