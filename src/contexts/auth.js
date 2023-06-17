import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../service/firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, setCurrentUser);
    console.log(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
