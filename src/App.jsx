import React from 'react';

import Hero from './components/Hero';
import Navbara from './components/Navbara';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import Shop from './components/Shop';
import Ban from './components/Ban';
import BulletFollowCursor from './components/Bullet';
import ContactUs from './components/Contact';
import ChatGpt from './components/AIbot';
import BestSeller from './components/BestSeller';


function App() {
  return (
  <>
    <BrowserRouter>
     <BulletFollowCursor/>
      {/* <Navbar/> */}
      <Navbara/>
        <Routes>
           <Route path='/' element= {<Hero/>}></Route>
           <Route path='/profile' element= {<Profile/>}></Route>
           <Route path='/contact' element= {<ContactUs/>}></Route>
           <Route path='/shop' element= {<Shop/>}></Route>
           <Route path='/BestSeller' element= {<BestSeller/>}></Route>
           {/* <Route path='/chat' element= {<ChatGpt/>}></Route> */}
        </Routes>
    </BrowserRouter>

  </>
  );
};

export default App