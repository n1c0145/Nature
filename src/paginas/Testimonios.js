import React from 'react';
import '../estilos/testimonios.css';
import img2 from "../assets/img2.png";

function Testimonios() {
    return (
        <div className='testimonios text-center'>
            <div className='fs-3 fw-bolder text'>TESTIMONIALS</div>
            <div className='fs-5 mt-1 font-weight-normal text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec.</div>
            <div className='testimonios-img-box mx-auto'>
                <div className='testimonios-text-box'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh lectus, pharetra ut tempus vitae, suscipit sagittis dolor. Nullam scelerisque elit vitae tempus maximus. Duis.</p>
                    <div>Lorem ipsum dolor sit amet, consectetur</div>

                </div>
            </div>
        </div>

    )

};

export default Testimonios;