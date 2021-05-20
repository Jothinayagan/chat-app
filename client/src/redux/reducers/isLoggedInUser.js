const isLogged = (state = false, action) => {
    switch (action.type) {
        case "USER_LOGGED_IN":
            return !state;
        case "USER_LOGGED_OUT":
            return state;
        default:
            return state;
    }
};

export default isLogged;
