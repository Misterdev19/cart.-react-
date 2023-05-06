import Card from 'react-bootstrap/Card';

export function Footer() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Card>
                <Card.Header>Mercado Cart</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        Car spare part 
                    </p>
                    <footer className="blockquote-footer">
                        Desarrollado por: <cite title="Source Title">Juna Camilo Penagos React Developer</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  );
}
