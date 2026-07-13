import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Home({ todos }) {
  const total = todos.length;
  const doneCount = todos.filter(t => t.completed).length;
  const todoCount = total - doneCount;

  return (
    <Container>
      <h2 className="text-center mb-4">Riepilogo Impegni</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Totali</Card.Title>
              <h1 className="display-4 text-primary">{total}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Da Fare</Card.Title>
              <h1 className="display-4 text-warning">{todoCount}</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Completati</Card.Title>
              <h1 className="display-4 text-success">{doneCount}</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}