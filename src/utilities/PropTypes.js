import PropTypes from 'prop-types';

export const toDoItemShape = PropTypes.shape({
  finished: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
})