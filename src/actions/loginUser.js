// export const fetch_post= () =>{
//     return { type: 'FETCH_USER' };
// }

// export const receive_post = post => {
//     return {
//         type: "FETCHED_USER",
//         data: post
//     }
// }

// export const receive_error = () => {
//     return {
//         type: "RECEIVE_ERROR"
//     }
// }

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
            dispatch(login())
        })
        .catch(error=> console.log(error))
    }
    
}