import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRoutes";




function App() {
     return (
          <>
               <HashRouter>
                    <AppRouters />
               </HashRouter>
          </>
     );
}

export default App;
