import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import  { registerEvent } from '../../store/events';

function RegistrationForm({event}) {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const registeredList = useSelector(state => state.events.registered);
  const registeredEventIds = registeredList.map(event => event.registeredEvent.eventId)

  console.log(registeredEventIds);

  // form input states
  const [ticketCount, setTicketCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [errors, setErrors] = useState([]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = { id: event.id, ticketCount }
    return dispatch(registerEvent(payload))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }
  // dynamically show ticket count and order total
  useEffect(() => {
    let price = event.ticketPrice;
    let tickets = ticketCount;
    let cost = price * tickets;
    setTotalCost(cost);
  }, [ticketCount])
  let orderSummary = `Order Total: (${ticketCount}) x ${event.ticketPrice} = $${totalCost}`

  const registered = (registeredEventIds.find(id => id === event.id) !== undefined )
  const successMessage = `Alright!! You're signed up!`
  const closeWindow = `You may now close this window.`

  return (
    <>
      <div>
       { registered && (
          <>
            <h3 style={{color:'green'}}>{successMessage}</h3>
            <p>{closeWindow}</p>
          </>
        )}
       { !registered && (
            <h3>{orderSummary}</h3>
        )}
      </div>
      <div className={`flex-container`}>
        <form onSubmit={handleSubmit}>
          <ul>
            { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
          </ul>
          <label>
            How many tickets would you like to purchase?
            <input
              type="number"
              value={ticketCount}
              onChange={(e) => setTicketCount(e.target.value)}
              required
            />
          </label>
          <button disabled={registered} type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
