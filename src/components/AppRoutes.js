import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../utils/routes';
import { useSelector } from 'react-redux'


const AppRouter = () => {
     const isAuth = useSelector(state => state.userReducer.userName)
     
     let route;

     switch (!!isAuth) {
          case true:  {
               route = <Routes>
                    {authRoutes.map(({ path, element }) =>
                         <Route path={path} element={element} key={path} />
                    )
                    }
               </Routes>
               break
          }
          case false: {
               route = <Routes>
                    {publicRoutes.map(({ path, element }) =>
                         <Route path={path} element={element} key={path} />
                    )
                    }
               </Routes>
               break     
          }
          default: route = console.log("ошибка");
     }

     return route
};

export default AppRouter;