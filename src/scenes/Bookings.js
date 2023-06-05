import {useReducer, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import AvailableTimesReducer from "../components/AvailableTimesReducer";
import {fetchAPI, submitAPI} from "../utils/api";

// Function to update availableTimes based on the selected date
export const updateTimes = (dispatch, selectedDate) => {
    // Fetch times for the selected date
    const times = fetchAPI(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
};

// Function to initialize availableTimes
export const initializeTimes = () => {
    // Fetch times for the current date
    return fetchAPI(new Date());
};


const Bookings = () => {
    // Step 1: Lift state up to the Main component
    const [availableTimes, dispatch] = useReducer(AvailableTimesReducer, []);
    const navigate = useNavigate()

    const submitForm = (formData) => {
        const isBooked = submitAPI(formData)
        if (isBooked){
            navigate("/confirmedbooking")
        }
    }

    // Call initializeTimes on component mount to initialize availableTimes
    useEffect(() => {
        const initialTimes = initializeTimes();
        dispatch({ type: 'UPDATE_TIMES', payload: initialTimes });
    }, []);

    return (
        <section>
            <BookingForm availableTimes={availableTimes} updateTimes={(date) => updateTimes(dispatch, date)} submitForm={(formData) => submitForm(formData)}/>
        </section>
    )
}



export default Bookings