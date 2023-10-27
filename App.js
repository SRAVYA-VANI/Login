

import React from "react";
import { Route ,BrowserRouter, Routes} from 'react-router-dom';
import LoginForm from "./login";
import RegisterForm from "./Registration";

function App() {
  return (

    <div>
      <BrowserRouter><Routes>
 
<Route path="/reg" element={<RegisterForm/>}></Route>
      <Route path = "/login" element={<LoginForm/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;