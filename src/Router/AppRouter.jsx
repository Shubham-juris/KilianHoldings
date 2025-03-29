import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUsPage from '../pages/AboutUsPage';
import AccountBookPage from '../pages/AccountBookPage';
import ContactUsPage from '../pages/ContactUsPage';
import Blogs from '../pages/Blogs';
import StockMarketPage from '../pages/StockMarketPage';
import Careerpage from '../pages/Careerpage';

import Clintportalpage from '../pages/Clintportalpage';
import ServicePage from '../pages/ServicePage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<AboutUsPage />} />
      <Route path='/accountbook' element={<AccountBookPage />} />
      <Route path='/contactus' element={<ContactUsPage />} />
      <Route path='/stockmarket' element={<StockMarketPage />} />
      <Route path='/careers' element={<Careerpage />} />
      <Route path='/clintportal' element={<Clintportalpage />} />
      <Route path='/services' element={<ServicePage />} />
      <Route path='/blogs' element={<Blogs />} />
    </Routes>
  );
}
