import React from 'react';
import '../estilos/galeria.css';
import img2 from "../assets/img2.png";

function Galeria() {
    return (

        <div className='text-center px-5'> <div className='container'>
            <div className='fs-2 mt-5 fw-bolder text'>WORK GALERY</div>

            <div className='row mt-3'>
                <div className='col mt-5 '>
                    <img src={img2} alt="img2" className='galeria-img' />
                </div>
                <div className='col mt-5'>
                    <img src={img2} alt="img2" className='galeria-img' />
                </div>
                <div className='col mt-5'>
                    <img src={img2} alt="img2" className='galeria-img' />
                </div>

            </div>

        </div>

        </div>
    )

};

export default Galeria;