const initialState = {
    currentUser: {},
    isFetching: false,
    isError: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case "START_CREATE_USER_REQEST":
            return {...state, isFetching: true}
        case "CREATE_NEW_USER": 
            return {
                ...state,
                isFetching: false,
                currentUser: action.user
            }
        case "START_LOGIN_REQUEST":
            return { ...state, isFetching:true}
        case "LOGIN":
            return {
                ...state,
                isFetching:false,
                currentUser: action.user
            }
        case "LOGOUT":
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
      
}
export default usersReducer