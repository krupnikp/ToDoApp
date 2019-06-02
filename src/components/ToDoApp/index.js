import React from 'react';

import Filters from '../Filters';
import ItemsList from '../ItemsList';
import Form from '../Form';

import {getFilteredItems, generateUUID } from '../../utilities';
import localStorageService from '../../services/localStorageService'

class ToDoApp extends React.Component {
  state = {
    items: [],
    filters: {
      done: false,
    }
  };

  addItem = (inputValue) =>  {
    const newItem = {
      text: inputValue,
      id: generateUUID(),
      done: false,
    }
    this.setState((prevState) => ({items: [...prevState.items, newItem]}))
  }

  removeItem = (id) => {
    const filteredItems = this.state.items.filter(task => {
      return (task.id !== id)
    });

    this.setState({items: filteredItems});
  }

  changeItemStatus = (id) => {
    const itemsWithChangedStatus = this.state.items.map(item => {
      return item.id === id ? {...item, done: !item.done} : item 
    })

    this.setState({items: itemsWithChangedStatus});
    console.log(itemsWithChangedStatus);
  }

 changeDoneFilter = (e) => {
   const isDoneFilterChecked = e.target.checked
   this.setState(({filters: {done: isDoneFilterChecked}}))
 }

updateLocalStorage = () => {
  const items = this.state.items
  localStorageService.setToDoItems(items)
}

componentDidUpdate() {
  this.updateLocalStorage()
}

componentDidMount() {
  if(!this.state.items.length) {
      const restoredItems = localStorageService.getToDoItems()

      this.setState({items: restoredItems})
  }
}
  
  
  render(){
    const {filters, items} = this.state
    const filteredItems = getFilteredItems(items, filters)
    
    return (
      <>
        <Form
          onSubmit={this.addItem}
        />
        <Filters
          changeDoneFilter={this.changeDoneFilter}
          filters={filters}
        />
        <ItemsList 
          items={filteredItems} 
          changeItemStatus={this.changeItemStatus} 
          removeItem={this.removeItem} 
        />
      </>
    );
  }
}

export default ToDoApp