import React from 'react';
import {render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';
import dayjs from "dayjs";

// Mock the utils
jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

describe('BookingForm component', () => {
    let availableTimes;
    let updateTimes;
    let submitForm;

    beforeEach(() => {
        // Mock your data and functions before each test
        availableTimes = ['10:00', '11:00', '12:00'];
        updateTimes = jest.fn();
        submitForm = jest.fn();
    });

    test('renders the Header title inside BookingForm', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const titleElement = await screen.findByText(/Reservation/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders Booking Information subheader', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const subHeaderElement = await screen.findByText(/Booking Information/i);
        expect(subHeaderElement).toBeInTheDocument();
    });

    test('renders Client Information subheader', async () => {
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);
        const subHeaderElement = await screen.findByText(/Client Information/i);
        expect(subHeaderElement).toBeInTheDocument();
    });

    test('Validates correct date input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Get booking date input
        const bookingDateInput = screen.getByLabelText(/Booking Date/i);

        // Simulate onChange event with past date
        fireEvent.change(bookingDateInput, { target: { value: dayjs().format('MM/DD/YYYY') } });

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const bookingDateInput = screen.getByLabelText(/Booking Date/i);
            const errorMessage = screen.queryByText('Date Required');
            expect(bookingDateInput).not.toContainElement(errorMessage);
        });
    });

    test('Validates incorrect date input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Get booking date input
        const bookingDateInput = screen.getByLabelText(/Booking Date/i);

        // Simulate onChange event with past date
        fireEvent.change(bookingDateInput, { target: { value: dayjs().subtract(1, 'day').format('MM/DD/YYYY') } });

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Date cannot be in the past');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates correct time input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        userEvent.type(screen.getByLabelText(/Booking Time/i), '11:00');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const bookingTimeInput = screen.getByLabelText(/Booking Time/i);
            const errorMessage = screen.queryByText('Time Required');
            expect(bookingTimeInput).not.toContainElement(errorMessage);
        });
    });

    test('Validates incorrect time input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Click the dropdown but don't select anything
        userEvent.click(screen.getByLabelText(/Booking Time/i));

        // Simulate moving away from the dropdown without selecting an option
        userEvent.tab();

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the booking time field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Time Required');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates incorrect number of guests slider input', async () => {

        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        userEvent.type(screen.getByTestId('numberOfGuests-slider'), 0);

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Must be at least 2');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates correct number of guests slider input', async () => {

        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        userEvent.type(screen.getByTestId('numberOfGuests-slider'), 2);

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Must be at least 2');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    test('Validates correct first name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/First Name/i), 'John');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field not to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('First Name Required');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    test('Validates incorrect first name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/First Name/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('First Name Required');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates correct last name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/Last Name/i), 'John');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the last name field to bot show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Last Name Required');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    test('Validates incorrect last name input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Last Name/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Last Name Required');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates correct number input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/Number/i), '0987654321');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the last name field to bot show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Phone number Required');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    test('Validates incorrect number type input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Number/i), '09867');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Phone number is not valid');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates incorrect number input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Number/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Phone number Required');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates correct email input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Input valid first name
        userEvent.type(screen.getByLabelText(/Email/i), 'something@something.com');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the last name field to bot show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Email Required');
            expect(errorMessage).not.toBeInTheDocument();
        });
    });

    test('Validates incorrect email type input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Email/i), 'something');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('invalid email');
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('Validates incorrect email input', async () => {
        // Render the component
        render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

        // Leave the first name input blank (invalid input)
        userEvent.type(screen.getByLabelText(/Email/i), '');

        // Click the submit button
        userEvent.click(screen.getByRole('button', { name: /Reserve Table/i }));

        // Expect the first name field to show an error message
        await waitFor(() => {
            const errorMessage = screen.queryByText('Email Required');
            expect(errorMessage).toBeInTheDocument();
        });
    });


});
