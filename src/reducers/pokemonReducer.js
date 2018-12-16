import {
    GET_POKEMON,
    GET_POKEMONS,
    DELETE_POKEMON,
    ADD_POKEMON,
    UPDATE_POKEMON,
} from "../actions/types";

const initialState = {
    pokemons: [],
    currentPokemon: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        case GET_POKEMON:
            return {
                ...state,
                currentPokemon: action.payload
            };
        case DELETE_POKEMON:
            return {
                ...state,
                pokemons: state.pokemons.filter(pokemon => {
                    return pokemon.id !== action.payload
                })
            };
        case ADD_POKEMON:
            return {
                ...state,
                pokemons: [action.payload, ...state.pokemons]
            };
        case UPDATE_POKEMON:
            return {
                ...state,
                pokemons: state.pokemons.map(
                    pokemon => {
                        return pokemon.id === action.payload.id
                            ? (pokemon = action.payload.id)
                            : pokemon
                    }
                )
            };
        default:
            return state
    }
}