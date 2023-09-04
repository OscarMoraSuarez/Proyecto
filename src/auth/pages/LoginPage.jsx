import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const {handleLogin} = useContext(AuthContext);
  
  const navigate=useNavigate();
  const onLogin=()=>{
    const lastpath=localStorage.getItem('LastPath')||'/' ;
    console.log('lastpath',lastpath);
    handleLogin('Oscar Mora');
    navigate( lastpath,{
      replace:false
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
      className="btn btn-primary"
      onClick={onLogin}>
        LogIn
      </button>
    </div>
  )
}
