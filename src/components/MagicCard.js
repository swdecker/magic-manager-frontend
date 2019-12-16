import React from 'react'

const MagicCard = (props) =>{
    const { name, image_url } = props.card

    return (
        <div>
            <h4>{name}</h4>
            <img src={image_url} alt="magic card" height="150" width="50"></img>
        </div>
    )
}

export default MagicCard