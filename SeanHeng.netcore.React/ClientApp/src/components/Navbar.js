import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import  { Button } from './Button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobleMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <a to='/' className="navbar-logo" onClick={closeMobleMenu}>
                        <img className="navbar-logo-icon" src={'images/logo-circular.png'} alt="Logo" />
                        เซียนเฮง
                    </a> 
                    <div className="menu-icon" onClick={handleClick}>
                        { click? <FaTimes/>: <FaBars/>   }
                    </div>
                    <ul className={click? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <a className="nav-links" href='#feature' onClick={closeMobleMenu}>
                                ความสามารถ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href='#price' onClick={closeMobleMenu}>
                                ราคา
                            </a>
                        </li>
                        <li className="nav-btn">
                            {button?(
                                <a href='#register' className="nav-links" onClick={closeMobleMenu}>
                                    <Button buttonStyle='btn--solid'>สมัครสมาชิก</Button>
                                </a>
                            ) : (
                                <a href='#register' className="nav-links" onClick={closeMobleMenu}>
                                    <Button buttonStyle='btn--solid'
                                    buttonSize='btn--mobile'>
                                        สมัครสมาชิก
                                    </Button>
                                </a>
                            )
                            }
                        </li>
                        <li className="nav-btn">
                            {button?(
                                <a href='https://app.seanheng.com/web.merchantmgmt.biz/login' className="nav-links" onClick={closeMobleMenu}>
                                    <Button buttonStyle='btn--outline'>เข้าสู่ระบบ</Button>
                                </a>
                            ) : (
                                <a href='https://app.seanheng.com/web.merchantmgmt.biz/login' className="nav-links" onClick={closeMobleMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>
                                        เข้าสู่ระบบ
                                    </Button>
                                </a>
                            )
                            }
                        </li>
                    </ul>
                 </div>
            </div>   
            </IconContext.Provider>
        </>
    )
}

export default Navbar
