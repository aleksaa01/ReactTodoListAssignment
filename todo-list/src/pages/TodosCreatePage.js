import {useNavigate} from '@reach/router';
import {useDispatch} from 'react-redux';

import defaultStyles from '../styles';
import * as todoActions from '../actions/todoActions';
import {TodoBox} from '../components/TodoBox';


const TodosCreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTodo = (name, description) => {
    dispatch({
      type: todoActions.TODO_CREATE, 
      payload: {name: name, description: description}
    });
    navigate('/todos');
  }

  return (
    <div style={defaultStyles.containerCenter}>
      <TodoBox type="create" onSubmit={createTodo} onCancel={() => navigate('/todos')}/>
    </div>
  );
}

export default TodosCreatePage;