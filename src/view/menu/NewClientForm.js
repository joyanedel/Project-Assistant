import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Rellenar datos de cliente</Popover.Title>
      <Popover.Content>
        <Form>
            <Form.Group controlId="formBasicText">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicText">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Ingrese apellidos" />
            </Form.Group>

            <Form.Group controlId="formBasicText">
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text" placeholder="Ingresar empresa"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Check type="password" placeholder="Ingresar contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Check type="password" placeholder="Ingresar contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar correo" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrar Cliente
            </Button>
            </Form>
      </Popover.Content>
    </Popover>
  );
  
  const NewClientForm = (props) => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose={true}>
      <span variant="success">{props.title}</span>
    </OverlayTrigger>
  );

  export default NewClientForm;