import React from 'react'
import {Route, Routes } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../view/Home';

const Router = () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODA0OTUyOTYsImlhdCI6MTY4MDQwODg5Niwic3ViIjo2Nn0.Ez8DTjJx7yMXvVLpYyz0oW7Gj4lCxkXSZDyPj0F4isY'
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