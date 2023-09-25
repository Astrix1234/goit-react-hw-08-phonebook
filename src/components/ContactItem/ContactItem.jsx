import PropTypes from 'prop-types';
import './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
