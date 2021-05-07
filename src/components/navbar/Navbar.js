import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import Logo from '../logo/Logo';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClik = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    const showButton = () =>{
        if(window.innerWidth <= 1000)
            setButton(false);
        else
            setButton(true);
    };

    useEffect(() =>{
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return(
      <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link
                      to='/'
                      className='navbar-logo'
                      onClick={closeMobileMenu}
                  >
                      <Logo />
                  </Link>
                  <div className='menu-icon' onClick={handleClik}>
                      <i className={click ? 'fas fa-ellipsis-v' : 'fas fa-bars'}></i>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                              Inicio
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to = '/movies' className='nav-links' onClick={closeMobileMenu}>
                              Películas
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to = '/tvshows' className='nav-links' onClick={closeMobileMenu}>
                              Series
                          </Link>
                      </li>
                      <li className='nav-item-mobile'>
                          <Link 
                            to = '/sign-up' className='nav-links-mobile' 
                            onClick={closeMobileMenu}
                          >
                              Sign up
                          </Link>
                      </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
              </div>
          </nav>
      </>
    )
}

export default Navbar;
