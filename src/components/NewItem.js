/*
New Item
*/
import React  from 'react'

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this)
  }
  addItem() {
    let item = {
      quantity: this.inputQuantity.value,
      name: this.inputName.value,
    }
    this.props.addItem(item);
    this.inputQuantity.value = "";
    this.inputName.value = "";
  }
  render () {
    return(
      <form id="form-new-item" className="NewItem">
        <input className="NewItem-quantity"
          name="quantity"
          placeholder="num"
          type="number"
          ref={ itemProp => {this.inputQuantity = itemProp} }/>
        <input className="NewItem-name"
          name="name"
          placeholder="artítulo"
          type="text"
          ref={ itemProp => {this.inputName = itemProp} }/>
        <button className="NewItem-AddBtn"
          type="button"
          onClick={ this.addItem }>Añadir</button>
      </form>
      );
  }
}

export default NewItem