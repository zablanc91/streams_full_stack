import axios from 'axios';

//action creator using use our API backend to get info if user is logged
//note: we use reduxThunk @ index.js to allow manual dispatching
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: 'FETCH_USER',
        payload: res.data
    });
};

//create a stream, use our API endpoint defined in our backend stream routes file
export const createStream = (formValues) => async (dispatch, getState) => {
    let {name, description} = formValues;
    let userID = getState().auth._id;
    let streamData = {name, description, userID};

    await axios.post('/api/streams/create', streamData);
    dispatch({
        type: 'CREATE_STREAM',
        payload: streamData
    });
};

//pulls streams from our API, result is an array of objects representing our stream and its info
export const getStreams = () => async (dispatch) => {
    let res = await axios.get('/api/streams');
    dispatch({
        type: 'GET_STREAMS',
        payload: res.data
    });
}