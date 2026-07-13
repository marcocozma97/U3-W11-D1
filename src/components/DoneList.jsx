import { Container, ListGroup, Button } from 'react-bootstrap';

export default function DoneList({ todos, toggleTodo, deleteTodo }) {
  const doneTodos = todos.filter(todo => todo.completed);

  return (
    <Container>
      <h2 className="mb-4">Impegni Completati</h2>

      <ListGroup>
        {doneTodos.length === 0 ? (
          <p className="text-muted">Non hai ancora completato nulla. Al lavoro! 💪</p>
        ) : (
          doneTodos.map(todo => (
            <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center bg-light">
              <span className="text-decoration-line-through text-muted">{todo.text}</span>
              <div>
                <Button variant="warning" size="sm" className="me-2" onClick={() => toggleTodo(todo.id)}>
                  Ripristina
                </Button>
                <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
                  Elimina
                </Button>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
}