import React from 'react'
import "./MainStyle.css";
const Mains = () => {
  return (
    <div class="sidebar">
    <div class="side-left">
    {/* <img className='claimimg' src='Assets/Ellipse 21.png' /> */}
      <div class="text-container">
        <span className='free-quote'>Claim a Free Quote</span>
        <span><span>Get started</span> on fulfilling your Dubai or UAE dream.</span>
        <span>UAE & Offshore Company</span>
        <span>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</span>
        <div class="btn-style">
          <button>Start a Company</button>
          <button>Renew a Company</button>
        </div>
      </div>
    </div>
    <div class="side-right">
      <img className='img-side-bar' src="Assets/ILLUSTRATION.png" alt=""/>
    </div>
  </div>
  )
}

export default Mains
