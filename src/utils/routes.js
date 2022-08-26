import { Navigate } from "react-router-dom"
import Auth from "../pages/Auth"
import Chats from "../pages/Chats"
import { CHAT_ROUTE, START_ROUTE } from "./const"


export const publicRoutes = [
     {
          path: START_ROUTE,
          element: <Auth />
     },
     {
          path: '*',
          element: <Navigate to={START_ROUTE}/>
     }
]

export const authRoutes = [
     {
          path: CHAT_ROUTE,
          element: <Chats />
     },
     {
          path: '*',
          element: <Navigate to={CHAT_ROUTE}/>
     }
]

