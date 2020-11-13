import React from 'react';
import Table from 'react-bootstrap/Table';

class DeveloperMenu extends React.Component{
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
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Braulio</td>
                        <td>Fuentes</td>
                        <td>Se comenta por ahí que él fue el fundador de KuKluxKlan. "Prefiero pájaro en mano con un pene en el ano"</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jesús</td>
                        <td>Oyanedel</td>
                        <td>Fundador del sexo. Primo de Diógenes de Cínope</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Diego</td>
                        <td>Barboza</td>
                        <td>Dicen las malas lenguas que tuvo sexo con 5 personas en una habitación sin siquiera estar presente</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default DeveloperMenu;