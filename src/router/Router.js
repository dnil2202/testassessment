import React from 'react'
import {Route, Routes } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../view/Home';

const Router = () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODA1ODM4NTUsImlhdCI6MTY4MDQ5NzQ1NSwic3ViIjo3MX0.M54NjfRT4cUV2nJQEs5_TOjakm5EB27LATbl4UUXhLs'
  localStorage.setItem('employee',token)
  return (
        <Routes>
            <Route 
            path='/' 
            element=
            {(
              <Layout>
                <Home/>
              </Layout>
  )}/>
        </Routes>
  )
}

export default Router