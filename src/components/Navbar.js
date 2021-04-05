import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobleMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <a to='/' className="navbar-logo" onClick={closeMobleMenu}>
                            <img className="navbar-logo-icon" src={'images/logo-circular.png'} alt="Logo" />
                        เซียนเฮง
                    </a>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <a className="nav-links" href='#feature' id='feature_navbar' onClick={closeMobleMenu}>
                                    ความสามารถ
                            </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links" href='#price' id='price_navbar' onClick={closeMobleMenu}>
                                    ราคา
                            </a>
                            </li>
                            <li className="nav-btn" id='register_navbar'>
                                {button ? (
                                    <a href='https://app.seanheng.com/web.merchantmgmt.biz/register?q=wzF+X4jNJESoNmPzahaeWRaCAXeNqlDC9waf11Yf3x405p7UaFmWPXEec4msKeja6yknnZw8M/Xf30LnAlC3JY645KX09ZhBaQANDju26PE=' className="nav-links" >
                                        <Button buttonStyle='btn--solid'
                                            id='register_navbar'>สมัครสมาชิก</Button>
                                    </a>
                                ) : (
                                        <a href='https://app.seanheng.com/web.merchantmgmt.biz/register?q=wzF+X4jNJESoNmPzahaeWRaCAXeNqlDC9waf11Yf3x405p7UaFmWPXEec4msKeja6yknnZw8M/Xf30LnAlC3JY645KX09ZhBaQANDju26PE=' className="nav-links" >
                                            <Button buttonStyle='btn--solid'
                                                buttonSize='btn--mobile'
                                                id='register_navbar'>
                                                สมัครสมาชิก
                                    </Button>
                                        </a>
                                    )
                                }
                            </li>
                            <li className="nav-btn" id='login_navbar' >
                                {button ? (
                                    <a href='https://app.seanheng.com/web.merchantmgmt.biz/main' className="nav-links" onClick={closeMobleMenu}>
                                        <Button buttonStyle='btn--outline' id='login_navbar'>เข้าสู่ระบบ</Button>
                                    </a>
                                ) : (
                                        <a href='https://app.seanheng.com/web.merchantmgmt.biz/main' className="nav-links" onClick={closeMobleMenu}>
                                            <Button buttonStyle='btn--outline'
                                                buttonSize='btn--mobile' id='login_navbar'>
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
