const initialState = {
    count: 0,
    incrementationNumber: 1,
    decrementationNumber: 1
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count += parseInt(state.incrementationNumber)};
        case 'CHANGE_INCREMENTATION_NUMBER':
            return {...state, incrementationNumber: parseInt(action.number)};
        case 'DECREMENT':
            return {...state, count: state.count -= parseInt(state.decrementationNumber)};
        case 'CHANGE_DECREMENTATION_NUMBER':
            return {...state, decrementationNumber: parseInt(action.number)};
        case 'RESET':
            return 0;
        default:
            return state;
    }
};