import { Text, Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodo } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodo);
  return (
    <>
      <Grid>
        {todos.map((todo, i) => {
          return (
            <GridItem key={todo.id}>
              <Todo todo={todo} counter={i + 1} />
            </GridItem>
          );
        })}
      </Grid>
      <Text textAlign="center">We did not find any todo😯</Text>
    </>
  );
};
