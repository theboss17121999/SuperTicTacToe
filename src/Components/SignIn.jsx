import React, { useState } from 'react';
import '../Style/SignIn.css';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <>    
        <div className='bg-red-500 flex justify-center items-center h-screen'>
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-title"><span>sign in to your</span></div>
                <div className="title-2"><span>GAME</span></div>
                <div className="input-container">
                    <input className="input-mail" type="email" placeholder="Enter email" />
                    <span> </span>
                </div>

                <section className="bg-stars">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </section>

                <div className="input-container">
                    <input className="input-pwd" type="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="submit">
                    <span className="sign-text">Sign in</span>
                </button>

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
