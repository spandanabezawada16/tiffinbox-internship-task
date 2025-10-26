import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './index.css'
import Afterlogin from './Afterlogin';
import Beforelogin from './Beforelogin'
import Mealplanner from './Mealplanner';
import Fullrecepie from './Fullrecepie';
import Sendrecepie from './Sendrecepie';
import Recepiecategory from './Recepiecategory';
import Saved from './Saved';
import Displayitems from './Displayitems';
import Dayplanner from './Dayplanner';
import Signup from './Signup';
import Login from './Login';
import Plannerdisplay from './plannerdisplay';
import Profile from './Profile';
import FetchStudentMarks from './Fetchstudentmarks';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/*<Routes>
    <Route path='/' exact element={<Beforelogin/>}/>
    <Route path='/Beforelogin' element={<Beforelogin/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='/Afterlogin' element={<Afterlogin/>}/>
    <Route path='/Mealplanner' element={<Mealplanner/>}/>
    <Route path='/Fullrecepie' element={<Fullrecepie/>}/>
    <Route path='/Recepiecategory' element={<Recepiecategory/>}/>
    <Route path='/Sendrecepie' element={<Sendrecepie/>}/>
    <Route path='/Saved' element={<Saved/>}/>
    <Route path='/Displayitems' element={<Displayitems/>}/>
    <Route path='/Dayplanner/:day' element={<Dayplanner/>}/>
    <Route path='/Plannerdisplay' element={<Plannerdisplay/>}/>
    <Route path='/Profile' element={<Profile/>}/>
</Routes>*/}
    </BrowserRouter>
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
