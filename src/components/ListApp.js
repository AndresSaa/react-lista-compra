/*
List App
*/
import React  from 'react'
import List from './List'
import NewItem from './NewItem'
import ListQuantifier from './ListQuantifier'
import ServiceList from '../services/List'

class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = { items:[], quantity:0 };
    this.loadItems();
  }
  addItem(item) {
    let items = this.state.items
    items.unshift({
      quantity: item.quantity,
      name: item.name,
    });
    this.updateList(items);
  }
  loadItems() {
    new ServiceList().getItems()
      .then(items => {
        this.updateList(items)
      })
  }
  updateList (items) {
    let quantity = 0;
    items.forEach(item => {
      quantity += parseInt(item.quantity)
    });
    this.setState({ items, quantity })
  }
  render () {
    return(
      <div className="ListApp">
        <NewItem addItem={ this.addItem } />
        <List items={this.state.items}/>
        <ListQuantifier quantity={this.state.quantity}/>
      </div>
    );
  }
}

export default ListApp