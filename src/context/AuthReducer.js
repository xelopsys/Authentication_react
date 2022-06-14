export const AuthReducer = (state, action) => {
    switch (action.payload) {
        case 'LOGIN': {
            return {
                currentUser: action.payload,
            }
        }
        case 'LOGOUT': {
            return {
                currentUser: null,
            }
        }
        default: {
            return state;
        }
    }
}