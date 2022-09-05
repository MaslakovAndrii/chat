import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { START_ROUTE } from '../../utils/const';

const PrivateRoute = ({ children }) => {

     const isLogin = useSelector(state => state.userReducer.userName)

     return  isLogin ? children : <Navigate to={START_ROUTE} replace={true} />
};

export default PrivateRoute;