import { useState } from 'react';
import { Container, Form, Button, InputGroup, ListGroup } from 'react-bootstrap';

export default function TodoList({ todos, addTodo, toggleTodo }) {
  const [inputValue, setInputValue] = useState('');

  const pendingTodos = todos.filter(todo => !todo.completed);

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Cose Da Fare</h2>
      
      <Form onSubmit={handleAdd} className="mb-4">
        <InputGroup>
          <Form.Control
            placeholder="Nuovo impegno..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Aggiungi
          </Button>
        </InputGroup>
      </Form>

      <ListGroup>
        {pendingTodos.length === 0 ? (
          <p className="text-muted">Nessun impegno in sospeso! 🎉</p>
        ) : (
          pendingTodos.map(todo => (
            <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
              {todo.text}
              <Button variant="success" size="sm" onClick={() => toggleTodo(todo.id)}>
                Fatto ✓
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
}

export default TodoList;