import React from 'react'
import Card from 'react-bootstrap/Card'

const MagicCard = (props) =>{
    const { name, image_url } = props.card

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                save the cards rules text and put it here 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MagicCard