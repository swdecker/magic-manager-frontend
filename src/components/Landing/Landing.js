import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


const style = {
    display:"grid",
    gridTemplateColumns:" 20% 20% 20% 20% 20%",
    gridTemplateRows: "20% 20% 20% 20% 20%",
    backgroundImage: "url(/card_jumble.jpg)", height: '100vh', backgroundSize: 'cover'
}
const Landing = (props)=>{
    return (
        <div id={'welcome'}style={style} >
            <div style={{backgroundColor:'white',display:"grid",
                        gridColumn:"2/4",
                        gridRow: "2/4",
                        textAlign:"center"}}>
                <h1> Magic Manager </h1>
                 <h1> All your cards in one place</h1>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} >
                <Link to="/signup"><Button>{"Signup"}</Button></Link>
                <Link to="/login"><Button>{"Login"}</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing