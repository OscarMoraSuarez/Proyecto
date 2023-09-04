import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState={
  logged:false,
}
const init=()=>{
  const user= JSON.parse(localStorage.getItem('user'));
  // console.log('user',user);
  return {
    logged:!!user,
    user,
  }
  
}
export const AuthProvider = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer,initialState,init);
  const handleLogin=async(name='')=>{
      const user={
        id:'ABC',
        name:name
      }
      const action={
      type:types.Login,
      payload:user
      
    }
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }
  const handleLogOut=()=>{
    const action={
      type:types.Logout
    }
    localStorage.removeItem('user');
    dispatch(action)

  }
  return (
    <AuthContext.Provider value={{
      ...authState,
      handleLogin:handleLogin,
      handleLogOut:handleLogOut
    }}>
        {children}
    </AuthContext.Provider>
  )
}
