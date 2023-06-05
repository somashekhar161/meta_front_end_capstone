// Define the reducer function for availableTimes state
const AvailableTimesReducer = (state, action) => {
    // Handle state changes based on the action type
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Perform logic to update available times based on selected date
            // The payload should now be an array of times, so we can directly return it
            return action.payload;
        default:
            return state;
    }
}

export default AvailableTimesReducer