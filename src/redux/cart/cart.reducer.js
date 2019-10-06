const INITIAL_STATE = {
    hiden: true
}

const cartReducer = (state = INITIAL_STATE, action) => { 
    switch(action.type) {
        case "TOGGLE_CART_HIDEN":
            return{
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
    }
}

export default cartReducer;