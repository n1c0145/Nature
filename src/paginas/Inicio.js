import React from 'react';
import '../estilos/inicio.css';


function Inicio() {
    return (
        <div className='inicio'>
            <div className='inicio-fondo'>
                <div className='inicio-text'>
                    <div className='inicio-title-text'>FORESTRY &amp;</div>
                    <div className='inicio-title-text'>LAND MANAGEMENT</div>
                    <div className='title-text2'>Since 1976</div>
                </div>
                <div className='inicio-text2'>
                    <div className='fs-3 fw-bold'>GET A FREE QUOTE</div>
                    <p className='fw-semibold mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam eros, convallis a mauris eget</p>
                    <div className='fw-bold'>Call Us: 123-456-7890</div>
                    <div ><button className='inicio-button mt-4'>Free Register</button></div>
                </div>

            </div>


        </div>
    )

};

export default Inicio;