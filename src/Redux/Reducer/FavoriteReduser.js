const initialState = {
    favorite: []
}
export const FavoriteReducer = (state = initialState, action ) => {
    switch (action.type){
        case "ADD_TO_FAVORITE" : {
            let bas = state.favorite.find(el => el.id === action.payload.id)
            if (bas) {
                return {...state, favorite: state.favorite.filter(el => el.id !== bas.id)}

            } else {
                return {...state, favorite: [...state.favorite, action.payload]}
            }
        }
        default:
            return state
    }
}