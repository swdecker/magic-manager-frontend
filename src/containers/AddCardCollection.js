import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import MagicCard from '../components/MagicCard'

export default class AddCardCollection extends Component {
    state =  {
        num_owned:"1"
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addCard(this.state.num_owned)
    }
    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <div>
                <MagicCard card={this.props.card}/> 
                Card Selected
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Form.numOwnedSelect">
                        <Form.Label>Number Owned:</Form.Label>
                        <Form.Control value={this.state.num_owned} name={"num_owned"} onChange={this.handleChange} as="select">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Text className="text-muted">
                        Card Selected
                    </Form.Text>
                    
                    <Button variant="primary" type="submit">
                        Add to Collection
                    </Button>
                    <Button onClick={this.props.handleClear} variant="danger" type="reset">
                        Clear card
                    </Button>
                </Form>
            </div>
        )
    }
}
