
import './App.css';
import React, { useState } from 'react';
import { Stack } from "@fluentui/react";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Icon } from '@fluentui/react/lib/Icon';




function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Shopping" }, { id: 2, name: "Cleaning" }]);  
  const MyIcon = () => <Icon iconName="ProductList" />;

  const addTodo = (todoName) => {
    if (todoName !== "") {
      const newId = todos.length + 1;
      const newTodos = [...todos, { id: newId, name: todoName }];
      setTodos(newTodos);
    }  
  };

  const deleteTodo = (id) => {
    const newTasks = todos.filter((todo) => { return todo.id !== id });
    setTodos(newTasks);
  };

  return (
    <body>
    <div className="wrapper">
      <Stack horizontalAlign="center">
        <h1> <MyIcon style={{ width: 96 }} className="icon" /> TODO APP  </h1>
        <Stack style={{ width: 400 }} gap={25}>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Stack>
      </Stack>
    </div>
    </body>
  );
}

export default App;
