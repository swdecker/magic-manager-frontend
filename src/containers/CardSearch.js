import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import MagicCard from '../components/MagicCard'

export default class CardSearch extends Component {
    state={
        cardName:"",
        card: {}
    }

    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        let card = { cardName: this.state.cardName}
        this.searchCard(card)
    }
    searchCard = card => {
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ card: card })
        }
        fetch('http://localhost:3001/api/v1/cards', configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data)
            this.setState({
                card: data.card})
            // should also set state with card info
        })
    }
    displayCard = () =>{
        if (this.state.card.name){
            return <MagicCard card={this.state.card} />
        }
    }
    render() {
         
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formCardName">
                        <Form.Label>Card Name</Form.Label>
                        <Form.Control onChange={this.handleChange} name={"cardName"} type="text" placeholder="Enter a card name" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {this.displayCard()}
            </div>
        )
    }
}
