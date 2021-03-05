import React from "react";
import "./Services.css";
import { ServiceData } from './Services-List'
const Services = () => {
  const handleServiceSelect = (data) => {
    document.querySelector(`.services-img-${data}`).classList.toggle('services-selected')
  }
  const handleDate = (e) => {
    var dateEntered = e.target.value
    dateEntered = new Date(dateEntered)
    var todayDate = new Date()
    var label = document.getElementById('services-date-label').style
    if ( dateEntered < todayDate ) { 
            label.display = 'block'
        }
    else{
      label.display = 'none'
    }
        

  }
  return (
    <div>
        <div className="nav-box">
          <h1 className="nav-box-text">Our Services</h1>
        </div>
          <div className='services-container'>
            {/* <p className='services-qoute'>Life isn't Perfect but you can be!</p> */}
            <h2 className='services-book'>Book an Appointment</h2>
            <div className='services-list-container'>
              {ServiceData.map((data) => {
                return(
                  <div className={`services-img-container`} 
                  key={data.key} 
                  onClick = {() => handleServiceSelect(data.key)}>
                    <img className={`services-img services-img-${data.key}`} src={require(`./Services-img/Services-img-${data.key}.jpg`)} alt=""/>
                    <h3 className='services-name'>{data.name}</h3>
                  </div>
                )
              })}
              </div>
              
              <input className='services-date' type="date" name='services-date' 
                onChange ={
                      (e) => handleDate(e)}
              />
              <label id='services-date-label' htmlFor="services-date">Enter valid date</label>
              <button className='appoint-button services-appoint-button'>Proceed</button>
          </div>
    </div>

    
  );
};

export default Services;
