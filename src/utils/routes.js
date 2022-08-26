import Auth from "../pages/Auth"
import Chats from "../pages/Chats"

import { CHAT_ROUTE, START_ROUTE } from "./const"


export const publicRoutes = [
     {
          path: START_ROUTE,
          element: <Auth />
     },
]

export const authRoutes = [
     {
          path: CHAT_ROUTE,
          element: <Chats />
     },
]

