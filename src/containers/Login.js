import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: ''
        }
    }

    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        let user = { username: this.state.username, password: this.state.password}
        this.loginUser(user)
    }
    loginUser = user => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: user })
        }
        fetch('http://localhost:3001/api/v1/login', configObj )
        .then(r => r.json())
        .then(data => {
            console.log(data) 
            localStorage.setItem('token', data.jwt);
            console.log(localStorage.getItem('token'))

            // should also set state with user info
        })
    }
    render() {
        return (
            <div>
                The login Form
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.handleChange} name={"username"} type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleChange} name={"password"} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
