import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUsPage from '../pages/AboutUsPage';
import AccountBookPage from '../pages/AccountBookPage';
import ContactUsPage from '../pages/ContactUsPage';
import ClintPortal from '../pages/clintportal';
import Blogs from '../pages/Blogs';
import StockMarketPage from '../pages/StockMarketPage';
import Services from '../pages/Services';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<AboutUsPage />} />
      <Route path='/accountbook' element={<AccountBookPage />} />
      <Route path='/contactus' element={<ContactUsPage />} />
      <Route path='/stockmarket' element={<StockMarketPage />} />
      <Route path='/clintportal' element={<ClintPortal />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blogs' element={<Blogs />} />
    </Routes>
  );
}
