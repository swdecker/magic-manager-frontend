import history from '../history'

export const logout = () =>{
    return (dispatch) =>{
        dispatch({type: 'LOGOUT'})
        history.push('/')
    }
};

