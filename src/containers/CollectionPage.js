import React, { Component } from 'react'
import MagicCard from '../components/MagicCard'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MagicNavbar from '../components/MagicNavbar'
import CardSort from '../components/CardSort'
export default class CollectionPage extends Component {
    state = {
        cards:[]

    }
    retrieveCardsFetch=()=>{
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
                cards: data
            })
        })
    }
    componentDidMount=()=>{
        this.retrieveCardsFetch()
    }

    removeCard = (cardId) =>{ 
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        
        }

        fetch(`http://localhost:3001/api/v1/userCards/${cardId}`, configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.retrieveCardsFetch()
        })
    }

    renderCollection = () =>{
        if( this.state.cards.length>0){
            return this.state.cards.map(card =><MagicCard removeCard={this.removeCard} key={card.card.name} num_owned={card.num_owned} userCardId={card.id} card={card.card} />)
        }
    }


    render() {
        const sorts = ['alphabetic', 'color', 'number owned']
        return (
            <div>
                <MagicNavbar />
            <div className={"collection-page"}>
                <h1>Check out all your cards</h1>
                <Link to={"/addCard"} ><Button>Add a card to collection </Button></Link>
                <CardSort sortTypes={sorts} />
                <div className={"card-collection"}> {this.renderCollection()}</div>
            </div>
            </div>
        )
    }
}
