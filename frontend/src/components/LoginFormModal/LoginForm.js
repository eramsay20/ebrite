import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';

function LoginForm() {
  const dispatch = useDispatch();

  // form input states
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const loginAsDemo = () => {
    const credential = 'DemoUser'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <div className={`flex-container`}>
        <form className='modal-form' onSubmit={handleSubmit}>
          <ul>
            { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
          </ul>
          <label>
            Username or Email
          </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          <label>
            Password
          </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <button type="submit">Log In</button>
          <button onClick={() => loginAsDemo()}>Log In As Demo User</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
