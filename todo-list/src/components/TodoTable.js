import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useDispatch} from 'react-redux';
import {useNavigate} from '@reach/router';

import * as todoActions from '../actions/todoActions';
import Todo from './Todo';


const TodoTable = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTodo = (index) => {
    dispatch({type: todoActions.TODO_DELETE, payload: {index: index}});
  }

  const undoTodo = (index) => {
    dispatch({type: todoActions.TODO_UNDO, payload: {index: index}});
  }

  const completeTodo = (index) => {
    dispatch({type: todoActions.TODO_DONE, payload: {index: index}});
  }

  const switchToEditPage = (index) => {
    navigate(`/todos/edit/${index}`);
  }

  return (
    <TableContainer component={Paper} sx={styles.table}>
      <Table aria-label="simple table">
        <TableHead sx={styles.tableHeader}>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map((todo, idx) => (
            <Todo key={idx} index={idx} {...todo} onDelete={deleteTodo} onUndo={undoTodo} 
              onDone={completeTodo} onEdit={switchToEditPage}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TodoTable;

const styles = {
  table: {
    minWidth: 300, 
    maxWidth: 1000, 
  },
  tableHeader: {
    backgroundColor: '#000'
  },
}