import React, { createContext, useState } from "react";

export const AuthContext = createContext();
function ContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  
  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
