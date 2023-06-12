import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../FireBase/FireBase.cnfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  // email register 

  const emailNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }



  // signOUt 
  const logOutUser = () => {
    return signOut(auth).then(() => {
      // Sign-out successful.
    })
  }







  // check user have your website 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((auth), currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe
    }
  }, [])

  // check user have your website end 

  const authInfo = {
    user,
    loading,
    emailNewUser,
    logOutUser

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;