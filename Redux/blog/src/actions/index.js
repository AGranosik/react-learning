import jsonPlaceHolder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }

export const getUser = (userId) => (dispatch, state) => _fetchUser(userId, dispatch);

const _fetchUser =  _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({ type: 'GET_USER', payload: response.data });
});