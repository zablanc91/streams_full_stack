//reducer for streams
//state is an object, key is stream name and value is stream name, description, and owner
export default (state = {}, action) => {
    switch(action.type){
        case 'CREATE_STREAM': 
            return {...state, [action.payload._id]: action.payload};
        case 'GET_STREAMS':
            //payload is an array representing streams, need to make compatible with state which is an object
            const streamsObj = {};
            action.payload.forEach((stream) => streamsObj[stream._id] = stream);
            return {...state, ...streamsObj};
        default:
            return state;
    }
};