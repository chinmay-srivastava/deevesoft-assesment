import React,{useState, useContext,useEffect} from 'react';
import { auth } from '../firebase';

const AuthContext=React.createContext();

export function useAuth(){
    return (
        useContext(AuthContext)
    );
}

export function AuthProvider({children}) {

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logout(){
        return auth.signOut();
    }

    function signup(email,password){
       return auth.createUserWithEmailAndPassword(email,password);
    }
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user=>{
            setcurrentUser(user)
        })
        return unsubscribe;
    }, []);
   

    const [currentUser, setcurrentUser] = useState();

    const value={currentUser,signup,login,logout}
  return (
      <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>
  );
}
