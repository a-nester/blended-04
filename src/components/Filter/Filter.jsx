import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { filter, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilter}
      value={value}
    />
  );
};
