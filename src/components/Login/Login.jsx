import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../UserContext/UserContext';
const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleGoogleSighIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err.message)
            )
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
                                </div>
                                <div className="divider">OR</div>

                            </div>
                        </form>
                        <div className="form-control">
                            <button className="btn btn-primary text-white" onClick={handleGoogleSighIn}><FaGoogle></FaGoogle> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;