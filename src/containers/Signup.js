import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { createUser } from '../actions/createUser'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email:"",
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
    // createUser = user =>{
        
    //     const configObj = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({ user: user })
    //     }
            
    //     fetch('http://localhost:3001/api/v1/users', configObj )
    //     .then(r => r.json())
    //     .then(user=> console.log(user) )
        
    // }
    handleSubmit = event =>{
        event.preventDefault()
        let user = { username: this.state.username, email:this.state.email, password: this.state.password}
        this.props.createUser(user)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formSignupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.handleChange} name={"username"} type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        Choose a unique username.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formSignupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} name={"email"} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formSignupPassword">
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

export default connect(null,{createUser} )(Signup)
