import './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return <input value={filter} onChange={handleFilterChange} />;
};

export default Filter;
