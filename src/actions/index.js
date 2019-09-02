export const clickButton = (value) => {
    console.log(value, "actioned")
    return {
        type: 'CLICK_UPDATE_BUTTON',
        newValue: value
    }
};

