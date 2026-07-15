import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  // Lo stato principale della nostra app: un array di oggetti { id, text, completed }
  const [todos, setTodos] = useState([
    { id: 1, text: 'Studiare React Router', completed: false },
    { id: 2, text: 'Fare la spesa', completed: true }
  ]);

  // Funzione per aggiungere un nuovo todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // genera un ID unico basato sul tempo
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Funzione per invertire lo stato completato/da fare
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Funzione per eliminare definitivamente un todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <BrowserRouter>
      {/* La Navbar è fuori dai Routes, così sarà visibile in tutte le pagine */}
      <CustomNavbar />
      
      {/* Definizione delle nostre 3 rotte principali */}
      <Routes>
        <Route path="/" element={<Home todos={todos} />} />
        
        <Route 
          path="/todo" 
          element={<TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />} 
        />
        
        <Route 
          path="/done" 
          element={<DoneList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 