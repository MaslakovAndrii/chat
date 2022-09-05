import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CHAT_ROUTE } from '../../utils/const';

const PublicRoute = ({ children, restricted }) => {

     const isLogin = useSelector(state => state.userReducer.userName);

     return (
          isLogin && !restricted
               ? <Navigate to={CHAT_ROUTE} replace={true} />
               : children
     )

};

export default PublicRoute;