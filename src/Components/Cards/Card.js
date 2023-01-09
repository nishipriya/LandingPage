import React from 'react'
import "./CardStyle.css";

const Card = () => {
  return (
    <div className="container-card">
        <div className="box" style={{width:"250px"}}>
            <img src='Assets/dungeon.png'/>
            <h4 className='card-h4'>UAE Free Zone Company</h4>
            <p className='pragraph-p'>Your registration agent, will answer all 
of your questions and help you to reach 
a conclusion that meets your objectives 
of investing in the UAE.</p>
<h3 className='getstarted'>Get Started</h3>
        </div>
        <div className="box" style={{width:"250px"}}>
            <img src='Assets/Vector-2.png'/>
            <h4 className='card-h4'>Dubai Local Companies</h4>
            <p className='pragraph-p'>The Dubai LLC formation documents 
are actually articles of organization or a 
certificate of organization. You can get 
yours today</p>
            <h3 className='getstarted'>Get Started</h3>
        </div>
        <div className="box" style={{width:"250px"}}>
            <img src='Assets/Vector-1.png'/>
            <h4 className='card-h4'>Offshore Compamies</h4>
            <p className='pragraph-p'>You can register an offshore company 
and open its bank account in Dubai. 
Your agent will help you along all the 
process</p>
            <h3 className='getstarted'>Get Started</h3>
        </div>
    </div>
  )
}

export default Card
