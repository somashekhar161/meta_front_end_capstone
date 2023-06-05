import './App.css';
import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./scenes/Home";
import Bookings from "./scenes/Bookings";
import ConfirmedBooking from "./scenes/ConfirmedBooking";

function App() {
    return (
        <React.Fragment>
            <Nav/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/bookings" element={<Bookings/>}/>
                    <Route path="/confirmedbooking" element={<ConfirmedBooking/>}/>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default App;
