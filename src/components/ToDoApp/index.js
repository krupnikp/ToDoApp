import React from 'react';

import Filters from '../Filters';
import ItemsList from '../ItemsList';
import Index from '../Form';

import {getFilteredItems, generateUUID } from '../../utilities';
import localStorageService from '../../services/localStorageService'

import './ToDoApp.scss'

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
      finished: false,
    }
    this.setState((prevState) => ({items: [...prevState.items, newItem]}))
    console.log(this.state.items) 
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

 handleDoneFilterChange = (e) => {
   console.dir(e.target)
   const isDoneFilterChecked = e.tagret.checked

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
        <Index
          onSubmit={this.addItem}
        />
        <Filters
          changeDoneFilter={this.handleDoneFilterChange}
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