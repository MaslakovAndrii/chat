import Auth from "../pages/Auth"
import Chats from "../pages/Chats"
// import Registration from "../pages/Registration"

import { AUTHORIZATION_ROUTE, CHAT_ROUTE, START_ROUTE } from "./const"


export const publicRoutes = [
     {
          path: START_ROUTE,
          element: <Auth />
     },
     {
          path: AUTHORIZATION_ROUTE,
          element: <Auth />
     },
]

export const authRoutes = [
     {
          path: CHAT_ROUTE,
          element: <Chats />
     },
]

