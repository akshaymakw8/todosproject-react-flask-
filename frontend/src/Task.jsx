import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

function Task({ todo }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [task, setTask] = useState({ ...todo });

  const handleCheck = (id) => () => {
    console.log(id);
  };

  const handleCancel = () => {
    setName(todo.name);
    setDescription(todo.description);
    setEdit(false);
  };

  const handleSubmit = () => {
    console.log(todo);
  };

  return (
    <ListItem
      key={task.name}
      secondaryAction={
        !edit && (
          <Checkbox
            edge="end"
            onChange={handleCheck(task.id)}
            checked={task.completed}
            inputprops={{ "aria-labelledby": task.id }}
            disabled={task.completed}
          />
        )
      }
    >
      {edit ? (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              size="small"
              id="task-title"
              label="Title"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
              sx={{ marginBlock: "10px" }}
            />
            <TextField
              fullWidth
              size="small"
              id="task-description"
              label="Description"
              variant="outlined"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ marginBlock: "10px" }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Button
                onClick={() => handleSubmit()}
                fullWidth
                sx={{ margin: "5px", bgcolor: "#aea9a9" }}
                variant="contained"
              >
                Save
              </Button>
              <Button
                onClick={() => handleCancel()}
                fullWidth
                sx={{ margin: "5px", bgcolor: "#aea9a9" }}
                variant="contained"
              >
                Cancel
              </Button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <ListItemText
          primary={
            <React.Fragment>
              {task.name}

              {!task.completed && (
                <IconButton onClick={() => setEdit(true)}>
                  <EditIcon
                    fontSize="small"
                    edge="end"
                    checked={task.completed}
                    inputprops={{ "aria-labelledby": task.id }}
                    disabled={task.completed}
                  ></EditIcon>
                </IconButton>
              )}
            </React.Fragment>
          }
          secondary={<React.Fragment>{task.description}</React.Fragment>}
        ></ListItemText>
      )}
    </ListItem>
  );
}

export default Task;
