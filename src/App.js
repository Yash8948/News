import './App.css';
import Header from './Componenets/Header';
import HomePage from './Componenets/HomePage';
import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer';
import { Route, Routes } from 'react-router';
import AboutUs from './Componenets/AboutUs';
import Notification from './Componenets/Notification';
import ContactUs from './Componenets/Contact_Us';
import NewsNotification from './Componenets/NewsNotification';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <>
      <Header />
      <Navbar />
      

      <Routes>

        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/about_us' element={<AboutUs />}></Route>
        <Route exact path='/notification' element={<Notification />}></Route>
        <Route exact path='/Contact_us'  element={<ContactUs/>}></Route>
        <Route exact path='/News_Notification' element={<NewsNotification/>}></Route>
        <Route exact path='/Persnol_Notification' element={<Notification/>}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
