import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { emailNewUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigates = useNavigate()
    const onSubmit = data => {
        console.log(data)
        // const info = {email : data.email,password: data.password};



    };



    return (
        <div className='py-28'>
            <div className="hero-content flex-col mx-28 lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">


                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your email</p>}

                
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" {...register("password",
                            )} name='password' placeholder="password" className="input input-bordered" />

                            {/* {errors.password?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your Password</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-700' role="alert">Must be Type your Password 6 Character</p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-700' role="alert">Must be Type your Password under 12 Character</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-700' role="alert">Must be Type your Password 6 Character With special Key and Lowercase With UpperCase </p>} */}


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>


                            <p className='mt-5 mb-5'>I am new User ! <Link to='/register'> <button className='btn btn-outline btn-sm'>Register</button></Link> </p>
                        </form>
                        {/* <GoogleSignIn></GoogleSignIn> */}
                    </div>
                </div>
                <div className=" lg:text-left">
                    {/* <img src={registerBgImg1} alt="" /> */}
                </div>

            </div>
        </div>
    );
};

export default Login;