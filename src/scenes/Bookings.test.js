// Bookings.test.js

import { initializeTimes, updateTimes } from './Bookings';
import {fetchAPI} from "../utils/api";

describe('initializeTimes function', () => {
    it('Should not return an empty array', () => {
        expect(initializeTimes()).not.toEqual([]);
    });
});

describe('updateTimes function', () => {
    it('dispatches correct action', () => {
        const mockDispatch = jest.fn();
        const selectedDate = new Date();

        const times = fetchAPI(selectedDate)
        expect(times).not.toEqual([]);

        updateTimes(mockDispatch, selectedDate);

        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: times });
    });
});
