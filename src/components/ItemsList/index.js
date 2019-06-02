import React from 'react';
import PropTypes from 'prop-types';

import './ItemsList.scss';

import {toDoItemShape} from '../../utilities/PropTypes';
 
const ItemsList = (props) => {
  const {changeItemStatus, removeItem, items} = props

  return (
    <ul className='task-list'>
      {items.map(({id, done, text}) => {
        const className = done ? 'task-element--finished' : 'task-element--unfinished'
        return ( 
         <li className={className} key={id}>
           <p className='task-text'>{text}</p>
           <div className='btn-task task-element--change' onClick={() => changeItemStatus(id)}>✓</div>
           <div className='btn-task task-element--remove' onClick={() => removeItem(id)}>X</div>
         </li>
        )
      })}
    </ul>
  );
}

ItemsList.protoType = {
  items: PropTypes.arrayOf(toDoItemShape)
}

export default ItemsList
