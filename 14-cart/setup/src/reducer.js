const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAN_CART':
            return {...state, cart: []}
        case 'REMOVE':
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}
        case 'INCREASE':
            return {...state, cart: state.cart.map(el => el.id === action.payload ? {...el, amount: el.amount + 1} : el)}
        case 'DISPLAY_ITEMS':
            return {...state, loading: false, cart: action.payload}
        case 'LOADING':
            return {...state, loading: true}
        case 'TOGGLE_AMOUNT':
            return {...state, cart: state.cart.map(el => {
                if(el.id === action.payload.id) {
                    if (action.payload.type === 'inc') {
                        return { ...el, amount: el.amount + 1 }
                    }
                    if (action.payload.type === 'dec') {
                        return { ...el, amount: el.amount - 1 }
                    }
                }
                return el;
            }).filter((cartItem) => cartItem.amount !== 0)}
        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem
                    const itemTotal = price * amount
            
                    cartTotal.total += itemTotal
                    cartTotal.amount += amount
                    return cartTotal
                },
                {
                    total: 0,
                    amount: 0,
                }
                )
            total = parseFloat(total.toFixed(2))
          
            return { ...state, total, amount }
        default:
            break;
    }
}

export default reducer;