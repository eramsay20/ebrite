import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../store/session';

function RegistrationForm({event}) {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  // form input states
  const [ticketCount, setTicketCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [errors, setErrors] = useState([]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // return dispatch(sessionActions.login({ credential, password }))
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   });
  }
  //

  useEffect(() => {
    let price = event.ticketPrice;
    let tickets = ticketCount;
    let cost = price * tickets;
    setTotalCost(cost);
  }, [ticketCount])

  let orderSummary = `Order Total: (${ticketCount}) x ${event.ticketPrice} = $${totalCost}`

  return (
    <>
      <div>
        <h3>{orderSummary}</h3>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
