import React from 'react'
import '../index.css'
import Iphone from '../assets/images/iphone-14.jpg'
import HodingIPhone from '../assets/images/iphone-hand.png'
function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt='Iphone' />
        <p className='text'>Big and Bigger.</p>
        <span className='description'>
            From 10000/mo. for 6 mo or 60000 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMore}>Learn More</a>
            </li>
        </ul>
        <img className='iphone-img' src={HodingIPhone} alt='iphone'/>
    </div>
  )
}

export default Jumbotron