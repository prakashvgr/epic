import * as Actions from './Actions';

export const rootReducer = (state, action) => {
    return {
        selectedDestination: selectedDestinationReducer(state.selectedDestination, action)
    }
}

export const selectedDestinationReducer = (selectedDestinationState, action) => {
    let selectedDestination;
    switch(action.type) {
        case Actions.SET_SELECTED_DESTINATION:
            selectedDestination = action.selectedDestination;
            break;
        default:
            selectedDestination = selectedDestinationState;
            break;
    }
    return selectedDestination;
}