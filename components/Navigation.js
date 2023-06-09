import React, { useState } from 'react';
import Button from '@mui/material/Button'
import HomePage from './pages/HomePage'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Portfolio from '../components/pages/Portfolio'
import Header from '../components/Header'



function Navigation() {

    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) =>  {
        setCurrentPage(page);
        console.log(page)
        console.log(currentPage)
    }
    

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <HomePage></HomePage>
        }
        if(currentPage === 'About') {
            return <About></About>
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio></Portfolio>
        }
        if(currentPage === 'Contact') {
            return <Contact></Contact>
        }
    }




  return (
    <>
   <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
   {renderPage()}
   </>
  );
}

export default Navigation;