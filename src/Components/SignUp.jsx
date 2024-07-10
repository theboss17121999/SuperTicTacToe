import React, { useState } from 'react';
import '../Style/SignUp.css';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  const postData = async (e) => {
    e.preventDefault(); 
    if(password1 === password2){
        try {
        const response = await fetch('http://localhost:3000/SignUpUser', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password1,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.msg);
        } else {
            setMessage(data.msg);
        }
        } catch (error) {
        setMessage('Unable to connect to the server');
        }
    }
    else {
        setMessage('Passwords do not match.');
    }
  };

  return (
    <div className='bg-red-500 flex justify-center items-center h-screen'>
      <div>
        <section>
          <form className="form" onSubmit={postData}>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <div className="flex">
              <div className="input-group pt-2">
                <label>
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    aria-label="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span>Firstname</span>
                </label>
              </div>
              <div className="input-group pt-2">
                <label>
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    aria-label="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <span>Lastname</span>
                </label>
              </div>
            </div>
            <div className="input-group pt-2">
              <label>
                <input
                  required
                  placeholder=""
                  type="email"
                  className="input"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </label>
            </div>
            <div className="input-group pt-2">
              <label>
                <input
                  required
                  placeholder=""
                  type="password"
                  className="input"
                  aria-label="Password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <span>Password</span>
              </label>
            </div>
            <div className="input-group pt-2">
              <label>
                <input
                  required
                  placeholder=""
                  type="password"
                  className="input"
                  aria-label="Confirm Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <span>Confirm password</span>
              </label>
            </div>
            <div className='pt-4'>
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
            {message && (
              <p className="message" style={{ marginTop: '10px', color: '#ff6347' }}>
                {message}
              </p>
            )}
            <p className="signin">
              Already have an account?{' '}
              <button
                className="pl-1 text-blue-400"
                style={{ border: 'none' }}
                type="button"
                onClick={() => navigate(`/signIn`)}
              >
                Sign in
              </button>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
