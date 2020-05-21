import axios from 'axios';

//action creator using use our API backend to get info if user is logged
//note: we use reduxThunk @ index.js to allow manual dispatching
export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: 'FETCH_USER',
        payload: res.data
    });
}