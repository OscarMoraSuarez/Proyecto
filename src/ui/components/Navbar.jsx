import { useContext } from "react";
import { Link,NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";


export const Navbar = () => {
  const {pathname} = useLocation();

  const {user,handleLogOut} = useContext(AuthContext);  
  // console.log(handleLogOut);

  const navigate=useNavigate()  ;
  const onLogout=()=>{
    handleLogOut();
    navigate('/login',{
        /* Para que la ruta anterior sea reemplazada y no poder navegar hacia atrás reemplazando el historial*/
        replace:true
        
    });

  }
  return (
        <nav className = "navbar navbar-expand-sm navbar-dark bg-dark  p-2" >
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
              <h2 className="firstTitle">HeroesApp</h2>    
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        /* "nav-item " */
                      className={({ isActive }) => `nav-item nav-link ${isActive?'active':''} `} 
                        to="/marvel"
                    >
                      <img src={'./assets/logos/marvel.png'} style={{ width: '30px', height:'30px' }} 
                      className={(pathname ==='/marvel')?'logo':''}  />  
                    </NavLink>

                    <NavLink 
                      className={({ isActive }) => `nav-item nav-link ${isActive?'active':''} `} 
                        to="/dc"
                    >
                      <img src={'./assets/logos/dc.png'} style={{ width: '30px' }} 
                      className={(pathname === '/dc') ? 'logo' : ''} />
                    </NavLink>
                  <NavLink
                      className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                      to="/Search"
                  >
                      <img src={'./assets/logos/seeking.png'} style={{ width: '30px' }}
                      className={(pathname === '/Search') ? 'logo' : ''} />
                  </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>
                    <button
                    className="nav-item nav-link btn"
                    onClick={onLogout}
                    >
                      <img src={'./assets/logos/logout.png'} style={{ width: '30px' }} />
                    </button>
                </ul>
            </div>
        </nav >
  )
}
