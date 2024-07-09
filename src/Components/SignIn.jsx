import React, { useState } from 'react';
import '../Style/SignIn.css';

export const SignIn = () => {
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
                    <a href="" className="up">Sign up!</a>
                </p>
                <div className='pt-4'>
                <p className="signup-link">
                    Continue with login?
                    <a href="" className="up">Start game</a>
                </p>
                </div>
            </form>
            </div>
            </div>
        </>
    );
}
