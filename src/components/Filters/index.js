import React from 'react';
import PropTypes from 'prop-types'

import './CheckboxFilter.scss'

const Filters = (props) => {
  const {filters:{done},changeDoneFilter} = props
  return(
    <div className='filter-checkbox'>
      <label>Show finished tasks:</label>
      <input className='filter-checkbox--change'
        type="checkbox"
        checked={done}
        onChange={changeDoneFilter}
      />
    </div>
  )
}

Filters.propTypes = {
  changeDoneFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    done: PropTypes.bool.isRequired
  }).isRequired
}

export default Filters