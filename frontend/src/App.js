cat > frontend/src/App.js << 'EOF'
import React, { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="container">
      <h1>í·¾ Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <b>{todo.title}</b> - {todo.description}
            {todo.completed ? " âœ…" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
EOF
