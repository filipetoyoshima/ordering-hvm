const initialState = {
    newValue: 'Redux'
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_UPDATE_BUTTON':
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};

