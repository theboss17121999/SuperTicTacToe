import React, { useState } from 'react';
import '../Style/SignIn.css';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // handle form submission here
        try {
            const response = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
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
    };

    return (
        <>    
        <div className='bg-red-500 flex justify-center items-center h-screen'>
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-title"><span>sign in to your</span></div>
                <div className="title-2"><span>GAME</span></div>
                <div className="input-container">
                    <input className="input-mail text-black" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <span> </span>
                </div>

                <section className="bg-stars">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </section>

                <div className="input-container">
                    <input className="input-pwd text-black" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="submit">
                    <span className="sign-text">Sign in</span>
                </button>
                {message && (
                    <p className="message" style={{ marginTop: '10px', color: '#ff6347' }}>
                        {message}
                    </p>
                )}

                <p className="signup-link">
                    No account?
                    <button className="pl-1 text-blue-400" style={{ border: 'none' }} onClick={() => navigate(`/SignUp`) }>Sign Up</button>
                </p>
                <div className='pt-4'>
                <p className="signup-link">
                    Continue without login?
                    <button className="pl-1 text-blue-400" style={{ border: 'none' }}  onClick={() => navigate(`/options`)}>Start game</button>
                </p>
                </div>
            </form>
            </div>
            </div>
        </>
    );
}
