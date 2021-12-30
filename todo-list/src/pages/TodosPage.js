import {useSelector} from 'react-redux';
import {useNavigate} from '@reach/router';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import {selectTodos} from '../selectors/todoSelector';
import TodoTable from '../components/TodoTable';
import defaultStyles from '../styles';


const TodosPage = () => {
  const todos = useSelector(selectTodos);
  const navigate = useNavigate();

  return (
    <div style={defaultStyles.containerTop}>
      <Fab variant="extended" sx={{margin: '20px 0'}} onClick={() => navigate('todos/create')}>
        <AddIcon sx={{ mr: 1 }}/> Create Todo
      </Fab>
      <TodoTable todos={todos} />
    </div>
  );
}

export default TodosPage;
