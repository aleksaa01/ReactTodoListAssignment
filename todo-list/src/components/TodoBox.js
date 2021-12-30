import {useState, useRef} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export const TodoBox = props => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isNameInvalid, setisNameInvalid] = useState(false);

  const validate = () => {
    const name = nameRef.current.value;
    const desc = descriptionRef.current.value;

    if (name.length === 0) {
      setisNameInvalid(true);
      return;
    }

    props.onSubmit(name, desc);
  }

  return (
    <Box component={Paper} sx={{ minWidth: 400, padding: '20px' }}
    noValidate autoComplete="off" elevation={5}>
      <Stack>
        <Typography fontWeight={700} variant="h5" align="center">
        {`${props.type[0].toUpperCase()}${props.type.slice(1)} Todo`}
        </Typography>
        
        <TextField inputRef={nameRef} label="Name" defaultValue={props.name} 
        error={isNameInvalid ? true : false} sx={{maxWidth: '70%', marginTop: '24px'}} 
        helperText={isNameInvalid ? "This field can't be empty." : " "} 
        onClick={isNameInvalid ? () => setisNameInvalid(false) : undefined} />
        
        <TextField inputRef={descriptionRef} label="Description" multiline rows={4}  
        defaultValue={props.description} sx={{marginTop: '24px'}}/>
        
        <Stack sx={{marginTop: '40px'}} direction="row" spacing={2} justifyContent="right">
          <Button variant='outlined' onClick={props.onCancel}>Cancel</Button>
          <Button onClick={validate} variant='outlined'>{props.type}</Button>
        </Stack>
      </Stack>
    </Box>
  );
}