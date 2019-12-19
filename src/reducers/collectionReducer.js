const initialState= {user_cards:[]}

const collectionReducer = ( state = initialState , action) => {
    switch (action.type){
        case "ADD_USER_CARD":
            return {
                ...state,
                user_cards: [...state.user_cards, action.user_card] 
            }
        case "REMOVE_USER_CARD":
            return {
                ...state,
                user_cards: state.user_cards.filter(card=> card.id !== action.id )
            }
        default:
            return state;
    }
    
}

export default collectionReducer