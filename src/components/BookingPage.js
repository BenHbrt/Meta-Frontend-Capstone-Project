import { useState, useEffect } from 'react';
import { fetchAPI } from '../functions/API';

const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useState([]);

    const getTimes = () => {
        const date = new Date(booking.date);
        const data = fetchAPI(date);
        setAvailableTimes(data);
    }

    const [booking, setBooking] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const handleChange = (e) => {
        const newBooking = { ...booking };
        newBooking[e.target.name] = e.target.value;
        setBooking(newBooking);
    }

    const occasions = ["Birthday", "Anniversary", "Corporate", "Other"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hi")
    }

    useEffect(() => {
        if (booking.date) {
            getTimes()
        }
    }, [booking.date])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="date">Choose Date</label>
                        <input id="date" type="date" value={booking.date} name="date" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="time">Choose Time</label>
                        <select id="time" name="time" onChange={handleChange} value={booking.time} required>
                            <option value="">Select a time</option>
                            {
                                availableTimes.map((time) => {
                                    return <option key={time} value={time}>{time}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number of Guests</label>
                        <input id="guests" min="1" max="350" step="1" type="number" value={booking.guests} name="guests" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="occasion">Choose Occasion</label>
                        <select id="occasion" name="occasion" onChange={handleChange} value={booking.occasion}>
                            <option value="">Select an Occasion</option>
                            {
                                occasions.map((occ) => {
                                    return <option key={occ} value={occ}>{occ}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="submit" aria-label="On Click" value={"Reserve Table"}/>
                    </div>
                </fieldset>
            </form>
            <button onClick={() => console.table(booking)}>Booking</button>
        </main>
    )
}

export default BookingPage