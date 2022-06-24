import React from 'react';
import '../estilos/servicios.css';
import img1 from "../assets/img1.png";
function Servicios() {
    return (

        <div className='servicios text-center'>
            <div className='servicios-tittle text-center fs-3 mt-5 fw-bolder'>FORESTRY SERVICES</div>
            <div className='row'>
                <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>
                <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>
                <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>

            </div>
            <div className='row'>
            <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>
                <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>
                <div className='col servicios-box mt-5'>
                    <img src={img1}/>
                </div>
       
            </div>

        </div> 
    )

};

export default Servicios;