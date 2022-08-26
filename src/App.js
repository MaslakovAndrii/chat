import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRoutes";



function App() {
     return (
          <>
               <BrowserRouter>
                    <AppRouters />
               </BrowserRouter>
          </>
     );
}

export default App;
