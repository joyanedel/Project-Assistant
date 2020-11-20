import { ADD_CLIENT, REMOVE_CLIENT, UPDATE_CLIENT } from '../actions/clientAction';
import ClientMapper from '../../models/mappers/ClientMapper';

const initialState = ClientMapper.getAllClients();

const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CLIENT:
            return [...state, action.payload];
        case REMOVE_CLIENT:
            return state.filter((cli) => cli.id !== action.payload);
        case UPDATE_CLIENT:
            var index = state.findIndex(cli => cli.id === action.payload[0]);
            state[index] = action.payload[1];
            return state;

        default:
            return state;
    }
}

export default clientReducer;