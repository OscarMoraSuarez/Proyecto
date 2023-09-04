import React from 'react'
import { Routes,Route,Navigate } from "react-router-dom";
import { NotFound } from '../../404/NotFound';
import { Navbar } from '../../ui'
import { MarvelPage,DcPage,HeroPage,SearchPage } from "../pages";

export const HerosRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DcPage />} />
                <Route path='hero/:id' element={<HeroPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='/' element={<Navigate to={'/marvel'} />} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </div>

          
              
    </>
    
  )
}
