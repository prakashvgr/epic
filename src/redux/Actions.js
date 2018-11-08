export const SET_SELECTED_DESTINATION = "SET_SELECTED_DESTINATION";

// Action Creators
export default class Actions {
    static setSelectedDestination(selecteddestination) {
        return {
            type: SET_SELECTED_DESTINATION,
            selecteddestination: selecteddestination
        }
    }
}
