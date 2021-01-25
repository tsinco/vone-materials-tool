import { useEffect, useState, useContext } from "react";
import app from "./Firebase";
import * as React from "react";
import { auth } from "./Firebase";

interface account {
  email?: string;
  password?: any;
}
const AuthContext = React.createContext(undefined);
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  function signup(email: string, password: any) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider value={currentUser}>
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
export default AuthProvider;
