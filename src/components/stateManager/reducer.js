export const initialState = {
    user: null,
}

export const actionType = {
    SET_USER: "SET_USER" //This is a reducer that would add the logged ib user data into the data layer.
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

export default reducer