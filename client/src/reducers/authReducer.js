//reducer to handle to login state

export default function(state = {}, action){
    switch(action.type){
        //return whether user is logged in or not
        case 'FETCH_USER':
            return action.payload || false;

        //on initialization, no clue about the state, so return default of empty state
        default:
            return state;
    }
}