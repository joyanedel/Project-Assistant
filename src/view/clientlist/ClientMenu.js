import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class ClientMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Braulio</td>
                        <td>Fuentes</td>
                        <td>@elputo</td>
                        <th>
                            <Button variant="outline-warning">Editar</Button>{' '}
                            <Button variant="danger">Eliminar</Button>
                        </th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jesús</td>
                        <td>Oyanedel</td>
                        <td>@lordfarquad</td>
                        <th>
                            <Button variant="outline-warning">Editar</Button>{' '}
                            <Button variant="danger">Eliminar</Button>
                        </th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Diego</td>
                        <td>Barboza</td>
                        <td>@sexcreator</td>
                        <th>
                            <Button variant="outline-warning">Editar</Button>{' '}
                            <Button variant="danger">Eliminar</Button>
                        </th>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default ClientMenu;