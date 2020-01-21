import React from 'react'

const CardSort =  (props) =>{
    const sorts = ()=>{
        return props.sortTypes.map(sortType=><option value={sortType}>{`${sortType}`}</option>)
    }
    return (
    <div>
        <select>
            {sorts()}
        </select>
    </div>
    
    )
}

export default CardSort