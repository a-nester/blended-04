import { Text, Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodo } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodo);

  const filter = useSelector(selectFilter);
  console.log('filter: ', filter);

  const filteredTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  return (
    <>
      <Grid>
        {filteredTodos().map((todo, i) => {
          return (
            <GridItem key={todo.id}>
              <Todo todo={todo} counter={i + 1} />
            </GridItem>
          );
        })}
      </Grid>
      {!filteredTodos().length > 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
