import React from 'react';
import PropTypes from 'prop-types'

import './Form.scss';
import '../../styles/GlobalStyles.scss'


export default class Index extends React.Component {
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
    const {value} = this.state

    return (
      <form className='form' onSubmit={this.handleOnSubmit}>
        <input className='form-input--text'
          onChange={this.handleOnInputChange} 
          value={value}
          placeholder="treść zadania" 
        />
        <button className='btn form-btn--submit' type='submit'>Dodaj</button>
      </form>
    );
  }
}

Index.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}