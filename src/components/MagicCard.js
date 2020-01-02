import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const MagicCard = (props) =>{
    const { name, image_url } = props.card
    const num_owned = props.num_owned
    return (
        <Card className={"magic-card"} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {parseInt(num_owned,10) >0  && `${num_owned} owned \n`}
                
                </Card.Text>
                {/* <Card.Text>save the cards rules text and put it here </Card.Text> */}
                {props.removeCard && <Button variant="danger" onClick={()=>props.removeCard(props.userCardId)}> Remove Card</Button>}
            </Card.Body>
        </Card>
    )
}

export default MagicCard