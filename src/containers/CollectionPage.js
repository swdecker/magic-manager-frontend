import React, { Component } from 'react'
import MagicCard from '../components/MagicCard'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class CollectionPage extends Component {
    state = {
        cards:[]
    }
    componentDidMount=()=>{
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        
        }
        fetch('http://localhost:3001/api/v1/userCards', configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                cards: data.cards
            })
        })
    }
    renderCollection = () =>{
        if( this.state.cards.length>1){
            return this.state.cards.map(card=><MagicCard key={card.name} card={card} />)
        }
    }


    render() {
        return (
            <div>
                <h1>Check out all your cards</h1>
                <Link to={"/addCard"} ><Button>Add a card to collection </Button></Link>
                <div> {this.renderCollection()}</div>
            </div>
        )
    }
}
