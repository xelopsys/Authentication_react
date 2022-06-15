import React, { useContext } from 'react'
import Login from './pages/login/Login';
import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home/Home';


function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="login" element={<Login />} />
            <Route index element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
