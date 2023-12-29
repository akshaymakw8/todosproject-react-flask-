import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Paper,
  Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    // Fetch tasks from the Flask API when the component mounts
    fetchTasks();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleAddTodo = async () => {
    try {
      // Send a POST request to add a new task
      await axios.post('http://localhost:5000/tasks', newTodo);
      // Refresh the task list
      fetchTasks();
      // Clear the input fields
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding task:', error.response.data.message);
    }
  };

  const handleDeleteTodo = async (taskId) => {
    try {
      // Send a DELETE request to remove a task
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      // Refresh the task list
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error.response.data.message);
    }
  };

  const fetchTasks = async () => {
    try {
      // Fetch tasks from the Flask API
      const response = await axios.get('http://localhost:5000/tasks');
      // Update the state with the fetched tasks
      setTodos(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" align="center">
          Todo List
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddTodo}
            style={{ marginTop: 20, backgroundColor: '#444950' }}
          >
            Add Todo
          </Button>
        </form>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText
                primary={todo.title}
                secondary={todo.description}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoList;
