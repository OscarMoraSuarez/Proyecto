
import React from 'react';
import queryString from 'query-string';
import { useForm } from "../hooks/useForm";
import { HeroCard } from '../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHerosByName } from "../helpers";


/* Para poder hacer lectura y separacion de los parametros del query-param en la url instalamos un paquete
llamado query string para parsear la propiedad search del objeto location*/
export const SearchPage = () => {
  const navigate=useNavigate();
  const location=useLocation();
   /* console.log({location});  */
  const  query  = queryString.parse(location.search); 
  /* console.log(query); */
  
  const { q='' }=queryString.parse(location.search); 
  console.log({q});
  const heroes=getHerosByName(q);
  const showSearch=(q.length===0);
  const showError = ((heroes.length===0)&&(q.length>0));
  const{searchText,form,onInputChange,onResetForm}=useForm({
    searchText:q
  })

  const onFormSubmit=(event)=>{

    event.preventDefault();
    /* Borrar espacios */
    // if(searchText.trim().length <=1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      
      <h1 className='text-dark'>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4 className='text-success'>Searching</h4>
          <hr />
          <form 
          onSubmit={onFormSubmit}
          >
            <input 
              type="text" 
              placeholder='Search Hero'
              className='form-control'
              name='searchText'
              value={searchText}
              onChange={onInputChange}
              autoComplete='off'
              />
              <button 
              className='btn btn-outline-success mt-2' 
              >
                Search
              </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            (q === '') ?
            <div className="alert alert-success">
              Search a hero
            </div>:(heroes.length===0)&&
              <div className="alert alert-danger">
                There´s not hero with <b>{q}</b>
              </div>

          } */}
          <div className="alert alert-success animate__animated animate__fadeIn" style={{display:showSearch?'':'none'}}>
            Search a hero
          </div>
          <div className="alert alert-danger  animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            There´s not hero with <b>{q}</b>
          </div>
          
          {heroes.map(hero => <HeroCard key={hero.id} hero={hero}/>)  }
        </div>
      </div>
    
    </>
  )
}
