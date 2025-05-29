import React from "react";
import Login from "./components/login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import { PrivateRoute } from "./components/ProtectedRoute";
import AddtoMenu from "./pages/AddToMenu";
import Sidebar from "./components/Sidebar";
import Analyticts from "./components/Analyticts";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        {/* <PrivateRoute>
          <Sidebar />
        </PrivateRoute> */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/add_to_menu"
            element={
              <PrivateRoute>
                <AddtoMenu />
              </PrivateRoute>
            }
          />

          <Route path="/Login" element={<Login />} />

          <Route
            path="/Analytics"
            element={
              <PrivateRoute>
                <Analyticts />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
