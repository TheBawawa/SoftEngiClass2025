import React, { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <Form.Control
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={addTask} className="mt-2">+</Button>
      <ListGroup className="mt-3">
        {tasks.map((task, i) => (
          <ListGroup.Item key={i}>{task}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
