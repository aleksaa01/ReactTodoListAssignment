import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Chip from '@mui/material/Chip';


const Todo = props => {
  return (
    <TableRow sx={{...styles.todo, ...(props.status === 'open' ? styles.openTodoBg : {})}}>
      <TableCell sx={styles.todoName}>{props.name}</TableCell>
      <TableCell sx={styles.todoDescription} align="left">{props.description}</TableCell>
      <TableCell sx={styles.todoStatus} align="center">
        {props.status === 'open' 
        ? <Chip label={props.status[0].toUpperCase() + props.status.slice(1)} variant="outlined" color="primary"/> 
        : <Chip label={props.status[0].toUpperCase() + props.status.slice(1)} variant="outlined" color="success"/>
        }
      </TableCell>
      {props.status === 'open'
      ? <TableCell sx={styles.todoActions} align="center">
          <IconButton color="success" onClick={() => props.onDone(props.index)}><CheckCircleOutlineIcon/></IconButton>
          <IconButton color="primary" onClick={() => props.onEdit(props.index)}><EditIcon/></IconButton>
          <IconButton color="error" onClick={() => props.onDelete(props.index)}><DeleteIcon/></IconButton>
        </TableCell>
      : <TableCell sx={styles.todoActions} align="center">
          <IconButton color="primary" onClick={() => props.onUndo(props.index)}><UndoIcon /></IconButton>
        </TableCell>
      }
    </TableRow>
  );
}

export default Todo;

const styles = {
  todo: {
    transition: 'background-color 0.4s'
  },
  todoName: {
    width: '25%',
  },
  todoDescription: {
    width: '45%',
  },
  todoStatus: {
    width: '10%',
  },
  todoActions: {
    width: '20%',
  },
  openTodoBg: {
    backgroundColor: "#303030"
  }
}