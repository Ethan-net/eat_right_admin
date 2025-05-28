import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { admin } = useContext(AuthContext);
  if (!admin) {
    return <Navigate to="/login" />;
  }
  return children;
}
