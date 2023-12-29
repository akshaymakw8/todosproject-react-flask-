import { Divider, List } from "@mui/material";
import React, { useEffect } from "react";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";

function Todos() {
  const navigate = useNavigate()
  const todos = [
    {
      id: 1,
      name: "Plan trip",
      description: "Plan hotels and transportaion for all the places to go.",
      completed: true,
    },
    {
      id: 2,
      name: "Plan a second trip",
      description: "Plan hotels and transportaion for all the places to go.",
      complted: false,
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem('email');
    if(!token) {
        navigate('/login')
    }
  },[])

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TodoList />
      {/* <List
        sx={{
          margin: "50px",
          maxWidth: "500px",
          minWidth: "300px",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {todos.map((todo) => (
          <React.Fragment>
            <Task key={todo.name} todo={todo} />
            <Divider />
          </React.Fragment>
        ))}
      </List> */}
    </div>
  );
}

export default Todos;
