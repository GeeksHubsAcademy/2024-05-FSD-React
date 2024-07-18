import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../../components/Login/Login';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound';
import { Services } from '../Services/Services';

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </>
  )
}
