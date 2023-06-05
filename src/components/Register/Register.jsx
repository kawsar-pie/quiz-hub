import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Register = () => {
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                updateUserProfile(name)
                    .then(() => {
                        console.log("Profile Updated")
                    }).catch((error) => {
                        console.log(error.message)
                    });
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err.message));

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already Have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Register</button>
                                    <div className="divider">OR</div>
                                </div>

                                <div className="form-control">
                                    <button className="btn btn-primary text-white" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Google</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;