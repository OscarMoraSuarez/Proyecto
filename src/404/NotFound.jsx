import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
   const navigate=useNavigate();

   const handleBackHome=()=>{

    navigate('/marvel',{
        replace:true
    })

  }
  return (
    <>  
        <div className='d-flex-column justify-content-center align-items-center '>
              <h1 className='text-dark text-center card m-4'>The page  you are looking for does not exists</h1>
            <h2 className='text-dark text-center card'>Plase try to come back in time </h2>
            <center>
                <button 
                className='btn btn-outline-success'
                onClick={handleBackHome}
                >
                    Back In Time
                </button>
            </center>
        </div>
    </>
  )
}
