import React from 'react'
import celcious from '../src/assets/celcious.jpg'
import faren from './assets/fahrenheit.png'
import humidity from './assets/humidity.png'



const Current = ({ current, location }) => {
    return (
        <>
            <div className="container">
                <div className=' bg-white rounded p-1 mt-5 fw-medium text-center'>
                    current Weather of :  {location.name}, {location.region},   , {location.country}
                </div>

                <div className="row">
                    <div className="col-md-3 col-sm-4  col-lg-3 col-xl-3 mt-2 px-5">
                        <div className=' bg-white rounded  mt-5 fw-medium'> <img src={current.condition.icon} alt="" className='mx-5' /> {current.condition.text} </div>
                    </div>
                    <div className="col-md-3 col-sm-4  col-lg-3 mt-2 px-5">
                        <div className=' bg-white rounded text-center mt-5 fw-medium'> <img src={celcious} alt="" style={{ width: '62px' }} className='col-md-3' /> Temperature : {current.temp_c} C° </div>
                    </div>
                    <div className="col-md-3 col-sm-4  col-lg-3 mt-2 px-5">
                        <div className=' bg-white rounded text-center mt-5 fw-medium'> <img src={faren} alt="" className='col-md-3 p-2' style={{ width: '62px' }} /> Fahrenheit :  {current.temp_f} F° </div>
                    </div>
                    <div className="col-md-3 col-sm-4  col-lg-3 mt-2 px-5">
                        <div className=' bg-white rounded text-center mt-5 fw-medium'> <img src={humidity} alt="" className='col-md-3 p-2' style={{ width: '62px' }} /> humidity : {current.humidity} </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Current