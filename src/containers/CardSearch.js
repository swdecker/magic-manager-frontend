import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddCardCollection from './AddCardCollection'
import { connect } from 'react-redux'
import addCard from '../actions/addCard'
import history from '../history'
class CardSearch extends Component {
    state={
        cardName:"",
        card: null
    }

    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleNameSubmit = event =>{
        event.preventDefault()
        let card = { cardName: this.state.cardName}
        this.searchCard(card)
    }

    handleImageSubmit = event =>{ 
        event.preventDefault()
        // let cardImage = 
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
    handleClear = ()=>{
        this.setState({
            card: null,
            cardName:""
        })
    }
    addCardToCollection = (num_owned) =>{
        const card = this.state.card
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify( { user: this.props.user, card: {...card, num_owned:num_owned } } )
        }
        fetch(`http://localhost:3001/api/v1/cards/${card.id}`, configObj )
        .then(r => r.json())
        .then(user_card => {
            console.log(user_card) 
            this.props.addCard(user_card)
            history.push('/collection')
        })
    }
    displayCard = () =>{
        if (this.state.card){
            return <AddCardCollection addCard={this.addCardToCollection} handleClear={this.handleClear} card={this.state.card} />
        }
    }
    render() {
         
        return (
            <div className={'card-search'}>
                {!this.state.card && 
                <div>
                <Form onSubmit={this.handleNameSubmit}>
                    <Form.Group controlId="formCardName">
                        <Form.Label>Card Name</Form.Label>
                        <Form.Control onChange={this.handleChange} value={this.state.cardName} name={"cardName"} type="text" placeholder="Enter a card name" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search for card
                    </Button>
                </Form>
                
                <Form onSubmit id="image-form">
                <Form.Group controlId="formCardImage">
                        <Form.Label>Card Image</Form.Label>
                        <Form.Control   name={"cardImage"} type="file" placeholder="Select an image " />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search for card
                    </Button>
                </Form>
                </div>}
                {this.displayCard()}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return { user: state.usersReducer.currentUser } 
}
const mapDispatchToProps = (dispatch)=>{
    return { addCard:(user_card)=> dispatch(addCard(user_card))}
}
export default connect( mapStateToProps, mapDispatchToProps )(CardSearch)
