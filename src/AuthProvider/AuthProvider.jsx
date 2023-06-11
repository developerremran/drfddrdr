import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../FireBase/FireBase.cnfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]) 

    






    // check user have your website 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), currentUser => {
          setUser(currentUser)
    
      
        })
        return () => {
          return unsubscribe
        }
      }, [])

    // check user have your website end 

    const authInfo = {
       user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;