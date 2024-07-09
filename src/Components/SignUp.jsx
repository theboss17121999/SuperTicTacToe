import React from 'react';
import '../Style/SignUp.css';

export const SignUp = () => {
    return (
        <div className='bg-red-500 flex justify-center items-center h-screen'>
            <div>
                <section>
                    <form className="form">
                        <p className="title">Register</p>
                        <p className="message">Signup now and get full access to our app.</p>
                        <div className="flex">
                            <label>
                                <input required placeholder="" type="text" className="input" aria-label="Firstname"/>
                                <span>Firstname</span>
                            </label>
                            <label>
                                <input required placeholder="" type="text" className="input" aria-label="Lastname"/>
                                <span>Lastname</span>
                            </label>
                        </div>
                        <label>
                            <input required placeholder="" type="email" className="input" aria-label="Email"/>
                            <span>Email</span>
                        </label>
                        <label>
                            <input required placeholder="" type="password" className="input" aria-label="Password"/>
                            <span>Password</span>
                        </label>
                        <label>
                            <input required placeholder="" type="password" className="input" aria-label="Confirm Password"/>
                            <span>Confirm password</span>
                        </label>
                        <button type="submit" className="submit">Submit</button>
                        <p className="signin">Already have an account? <a href="#">Signin</a></p>
                    </form>
                </section>
            </div>
        </div>
    );
};
