import React, { useState } from 'react';
import { Button, Input } from './index';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import './SignUp.css';

function SignUp() {
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState('Sign Up');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    try {
      const newUser = await authService.createAccount(data);
      if (newUser) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login());
        // navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit(create)} className='sign-up-container'>
        <div className="input-group">
          <div className='title-box'>
            <h2>{currentState}</h2>
            
          </div>
          <Input
            //label="Username"
            placeholder="Enter your username"
            type="text"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}

          <Input
            //label="Email"
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <Input
            l//abel="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        
        <Button className='sign-up-button' buttonText={currentState} type="submit" />

        {currentState === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span className="toggle" onClick={() => setCurrentState('Login')}>
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span className="toggle" onClick={() => setCurrentState('Sign Up')}>
              Sign Up
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default SignUp;
