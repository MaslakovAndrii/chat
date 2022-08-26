import { HashRouter, Route, Routes } from "react-router-dom";
import AppRouters from "./components/AppRoutes";
// import Auth from "./pages/Auth";
// import Chats from "./pages/Chats";



function App() {
     return (
          <>
               <HashRouter basename="/">
                    <AppRouters />
                    {/* <Routes>
                         <Route path='/' element={<Auth />}></Route>
                         <Route path='/chats' element={<Chats />}></Route>
                    </Routes> */}
               </HashRouter>
          </>
     );
}

export default App;
