

import history from '../history'

const startLogin = ()=>{
    return {type: "START_LOGIN_REQUEST"}
}

const login = ( user )=>{
    return {type: "LOGIN", user: user }
}

export const loginUser = (user)=>{
    return (dispatch)=>{
        dispatch(startLogin())
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: user })
        }
        fetch('http://localhost:3001/api/v1/login', configObj )
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
            dispatch(login(data.user))
            if(data.jwt === localStorage.getItem('token')){
                history.push('/collection')
            }
           
        })
        .catch(error=> console.log(error))
    }
    
}

