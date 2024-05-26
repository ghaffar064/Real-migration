
import { Global, css } from '@emotion/react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/screens/Home/Home';
import AboutUs from '../src/screens/AboutUs/AboutUs'
import Blog from '../src/screens/Blog/Blog'
import BookAnAppointment from '../src/screens/BookAnAppointment/BookAnAppointment'
import StudentInformationHub from '../src/screens/StudentInformationHub/StudentInformationHub'
import VisaApply from '../src/screens/VisaApply/VisaApply'
import Visas from '../src/screens/Visas/Visas'
import PageNotFound from '../src/screens/PageNotFound/PageNotFound'
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Confirmation from './screens/BookAnAppointment/subScreens/Confirmation';
const globalStyles = css`
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
  }
`;


function App() {

  return (
   
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/bookanappointment' element={<BookAnAppointment/>}/>
        
          <Route path='/studentinfohub' element={<StudentInformationHub/>}/>
          <Route path='/visaapply' element={<VisaApply/>}/>
          <Route path='/visas' element={<Visas/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
       

  
  );
}

export default App;
