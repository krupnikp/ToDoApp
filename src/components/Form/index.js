import React from 'react';
import PropTypes from 'prop-types'

import './Form.scss';

export default class Form extends React.Component {
  state = {
    inputValue: '',
  };

  handleOnInputChange = (e) => {
    this.setState({inputValue: e.target.value}) 
  }
  
  handleOnSubmit = (e) => {
    e.preventDefault()
    const {inputValue} = this.state
    
    if(inputValue){
      this.props.onSubmit(inputValue)
      this.resetInput()
    }
  }

  resetInput = () => {
    this.setState({inputValue: ''})
  }
  
  render(){
    const {inputValue} = this.state

    return (
      <form className='form' onSubmit={this.handleOnSubmit}>
        <input className='form-input--text'
          onChange={this.handleOnInputChange} 
          value={inputValue}
          placeholder="Enter message" 
        />
        <button className='btn form-btn--submit' type='submit'>Add</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}