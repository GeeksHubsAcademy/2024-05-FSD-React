import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../../components/Login/Login';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound';

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}
