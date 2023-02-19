import React from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import pic1 from '../../assets/3d-business-black-wallet-with-money.png'
import pic2 from '../../assets/3d-business-cash-and-coins.png'
import './landing.css';
const Landing = () => {
  return (
    <div className='landing'>
    <div className="landingHeader">
        <Header className="components" children={[<Button buttonName={"Login"}/>,<Button buttonName={"Sign up"}/>]}/>
    </div>
    <div className="landingBody">
    <div className="gifs">
            <img src={pic1} alt="" className='one'/>
            <img src={pic2} alt="" className='two'/>
    </div>
    </div>
    </div>
  )
}

export default Landing