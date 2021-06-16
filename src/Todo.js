import React, { useState } from 'react';
import './Todo.css';
import { Button, IconButton, List, ListItem, ListItemText, makeStyles, Modal, Tooltip } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function Todo(props) {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>I am Modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List>
        <ListItem style={{textAlign: "center"}}>
          <ListItemText primary={props.todo.todo} secondary="Dummy Deadline"></ListItemText>
        </ListItem>
        <Tooltip title="Edit Todo">
          <IconButton onClick={e => setOpen(true)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Todo">
          <IconButton onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
          <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </List>
    </>
  )
}

export default Todo;
