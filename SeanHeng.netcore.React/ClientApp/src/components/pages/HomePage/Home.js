import React from 'react'
import NavBar from '../../Navbar'
import Header from '../../Header'
import FirstContent from '../../pages/Contents/FirstContent'
import SecondContent from '../../pages/Contents/SecondContent'
import ThirdContent from '../../pages/Contents/ThirdContent'
import FourthContent from '../../pages/Contents/FourthContent'
import RegisterBlock from '../../pages/Contents/RegisterBlock'
import FAQContent from '../../pages/Contents/FAQContent'
import Pricing from '../../Pricing'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
            <NavBar/>
            <Header/>
            <FirstContent/>
            <SecondContent/>
            <ThirdContent/>
            <FourthContent/>
            <Pricing/>
            <RegisterBlock/>
            <FAQContent/>
            <Footer/>
        </>
    )
}

export default Home
