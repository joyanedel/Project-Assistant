import React from 'react';
import {Card, ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';

class DevData extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.name = props.name;
        this.info = props.info;
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.img} />
                <Card.Body>
                    <Card.Title> {this.name} </Card.Title>
                    <Card.Text>
                        {this.info}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }

}

class MenuMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Bienvenido Conchetumare</h2>
                <Container>
                    <Row>
                        <Col>
                            <DevData name="Diego Barboza" info="El mismisimo" img="https://media.metrolatam.com/2019/12/30/catstaylorswift-85035118782c15dd21f81c8811939332-1200x800.jpg" />
                        </Col>
                        <Col>
                            <DevData name="Braulio Fuentes" info="El mismisimo" img="https://ep01.epimg.net/cultura/imagenes/2019/12/24/actualidad/1577196621_419723_1577349836_noticiarelacionadaprincipal_normal.jpg" />
                        </Col>
                        <Col>
                            <DevData name="Jesús Oyanedel" info="El mismisimo" img="https://img.ecartelera.com/noticias/53200/53227-m.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MenuMenu;