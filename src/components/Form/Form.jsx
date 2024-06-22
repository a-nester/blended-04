import { FiSearch } from 'react-icons/fi';
import { nanoid } from '@reduxjs/toolkit';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.search.value;
    dispatch(addTodo({
      id: nanoid(),
      text: value,
    }));
  }
  return (
    <form className={style.form}
    onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus

      />
    </form>
  );
};
