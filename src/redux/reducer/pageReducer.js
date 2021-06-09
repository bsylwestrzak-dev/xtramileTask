const pageState = {
    totalPage: null
}

export const pageReducer = (state = pageState, action) => {
    switch(action.type){
        case 'SET_TOTAL_PAGE_NUMBER':
            return {...state, totalPage: action.payload} 
        default:
            return state    
    }
}