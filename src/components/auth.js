import React from 'react';
import { Redirect } from 'react-router-dom';
import User from '../classes/user';

const Auth = props =>
  User.isLoggedIn() ? props.children : <Redirect to={'./login'} />;

export default Auth;