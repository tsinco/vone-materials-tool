import { useEffect, useState, useContext } from "react";
import app from "./Firebase";
import * as React from "react";
import { auth, authGoogle } from "./Firebase";

const AuthContext = React.createContext({});
export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  function signup(email: string, password: any) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email: string, password: any) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
  function googlelogin() {
    return auth.signInWithPopup(authGoogle);
  }
  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    googlelogin,
    logout,
  };

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      )}
    </div>
  );
}
export default AuthProvider;
