import {useNavigate} from '@reach/router';
import {useDispatch, useSelector} from 'react-redux';

import defaultStyles from '../styles';
import * as todoActions from '../actions/todoActions';
import {TodoBox} from '../components/TodoBox';
import {selectTodoAt} from '../selectors/todoSelector';


const TodosEditPage = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector(selectTodoAt(props.todoIndex));

  const editTodo = (name, description) => {
    dispatch({
      type: todoActions.TODO_EDIT, 
      payload: {name: name, description: description, index: parseInt(props.todoIndex)}
    });
    navigate('/todos');
  }

  return (
    <div style={defaultStyles.containerCenter}>
      <TodoBox type="edit" name={todo.name} description={todo.description} 
      onSubmit={editTodo} onCancel={() => navigate('/todos')}/>
    </div>
  );
}

export default TodosEditPage;