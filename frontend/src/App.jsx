import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";

//importing files

  import LandingPage from "./pages/LandingPage.jsx";
  import Dashboard from "./pages/Home/Dashboard.jsx";
  import OnlyPrep from "./pages/OnlyPrep/OnlyPrep.jsx";
  import UserProvider from "./context/userContext.jsx";


  const App = () => {
    return (
      <UserProvider>
        <div>
          <Router>
            <Routes>
              {/* Default Route */}
              <Route path="/" element={<LandingPage />} />
  
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/only-prep/:sessionId"
                element={<OnlyPrep />}
              />
            </Routes>
          </Router>
  
          <Toaster
            toastOptions={{
              className: "",
              style: {
                fontSize: "13px",
              },
            }}
          />
        </div>
      </UserProvider>
    );
  };
  
  export default App;