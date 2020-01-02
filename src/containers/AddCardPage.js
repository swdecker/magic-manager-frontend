import React from 'react'
import CardSearch from './CardSearch'
import MagicNavbar from '../components/MagicNavbar'
const AddCardPage = (props)=>{
    return (
        <div className='add-card-page'>
            <MagicNavbar />
        <h1> Add a card to your Collection!!</h1>
        <CardSearch />
        </div>
    )
}

export default AddCardPage