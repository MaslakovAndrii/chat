import { HashRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Chats from './pages/Chats';
import Auth from './pages/Auth'
import { CHAT_ROUTE, START_ROUTE } from "./utils/const";
import PublicRoute from "./components/Routes/PublicRoute";




function App() {

     return (
          <>
               <HashRouter>
                    <Routes>
                         <Route index path={START_ROUTE} element={
                              <PublicRoute restricted={false}>
                                   <Auth />
                              </PublicRoute>
                         } />
                         <Route path={CHAT_ROUTE} element={
                              <PrivateRoute>
                                   <Chats />
                              </PrivateRoute>}
                         />
                         <Route path='*' element={<div>страница не найдена</div>} />
                    </Routes>
               </HashRouter>
          </>
     );
}

export default App;
