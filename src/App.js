import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouters from "./components/AppRoutes";



function App() {
     return (
          <>
               <HashRouter basename="/">
                    <AppRouters />
               </HashRouter>
          </>
     );
}

export default App;
