import axios from 'axios';
import React from 'react';

class ClientMapper {
    constructor(){
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.select = this.select.bind(this);
        this.getAllClients = this.getAllClients.bind(this);
    }

    static insert(form){
        //
        return true;
    }

    static update(client){
        /* update operation */
        return true;
    }

    static delete(client){
        /* delete operation */
        return true;
    }

    static select(id){
        /* select operation */
        return "" /* return Client */
    }

    static getAllClients() {
        /* select operation */
        var clients = [];
        axios.get('http://localhost:3000/registro')
        .then(response => {
            clients.push(...response.data);
        }).catch(e => {
            console.log(e);
        });

        console.log(clients);

        return clients;

    }
}

export default ClientMapper;