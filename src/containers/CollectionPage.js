import React, { Component } from 'react'
import MagicCard from '../components/MagicCard'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MagicNavbar from '../components/MagicNavbar'
import CardSort from '../components/CardSort'
export default class CollectionPage extends Component {
    state = {
        cards:[],
        currentSort: 'alphabetic'

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
        if( this.state.cards.length>0 ){
            return this.sortCards().map(card =><MagicCard removeCard={this.removeCard} key={card.card.name} num_owned={card.num_owned} userCardId={card.id} card={card.card} />)
        } 
    }
    sortCards = ()=>{
        //return this.state.cards sorted by this.state.currentSort
        switch( this.state.currentSort){
            case 'alphabetic':
                return this.state.cards.sort((card1,card2)=>{
                    if(card1.card.name < card2.card.name) { return -1; }
                    if(card1.card.name > card2.card.name) { return 1; }
                    return 0
                })
            case 'color':
                return this.state.cards
            case 'number owned':
                console.log(this.state.cards.sort((card1,card2)=>{return card2.num_owned-card1.num_owned}))
                return this.state.cards.sort((card1,card2)=>card2.num_owned-card1.num_owned)
            default:
                return this.state.cards
        }
    }
    handleSortChange = (event)=>{
        this.setState({currentSort: event.target.value})
    }

    render() {
        const sorts = ['alphabetic', 'color', 'number owned']
        return (
            <div>
                <MagicNavbar />
            <div className={"collection-page"}>
                <h1>Check out all your cards</h1>
                <Link to={"/addCard"} ><Button>Add a card to collection </Button></Link>
                <CardSort handleChange={this.handleSortChange} currentSort={this.state.currentSort} sortTypes={sorts} />
                <div className={"card-collection"}> {this.renderCollection()}</div>
            </div>
            </div>
        )
    }
}
