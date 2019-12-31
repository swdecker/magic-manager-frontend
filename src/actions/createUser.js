import history from '../history'

const startCreate = ()=>{
    return {type: "START_CREATE_USER_REQEST"}
}

const create = ( user )=>{
    return {type: "CREATE_NEW_USER", user: user }
}

export const createUser =  (user) => { 
    return (dispatch) =>{
        dispatch(startCreate());
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: user })
        }
        fetch('http://localhost:3001/api/v1/users', configObj )
        .then(response => {
            if (!response.ok){
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data) 
            localStorage.setItem('token', data.jwt);
            dispatch( create(data.user) )
            history.push('collection')
        })
        .catch(error=> console.log(error))
    }
        
}




