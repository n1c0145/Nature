import React from 'react';
import '../estilos/contactos.css';

function Contactos() {
    return (

        <div className='contactos text-center text-white'>

            <div className='fs-1 fw-bold'>CONTACT US</div>
            <div className='fs-4 fw-light'>Call or Email Us for a Free Quote</div>
            <div className='mt-2'>_________</div>
            <div className='mt-4 lh-1'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie velit eget rutrum rutrum. Morbi dolor nunc, sodales id dolor id, blandit lobortis urna. Quisque"</p></div>

            <div className='text-start mt-5'>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <label>Primer Nombre</label>
                        </div>
                        <div >
                            <input type="text" className='contactos-input-container' />
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <label>Segundo Nombre</label>
                        </div>
                        <div>
                            <input type="text" className='contactos-input-container' />
                        </div>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col'>
                        <div>
                            <label>Email*</label>
                        </div>
                        <div>
                            <input type="text" className='contactos-input-container' />
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <label>Asunto</label>
                        </div>
                        <div>
                            <input type="text" className='contactos-input-container' />
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <label>Mensaje</label>
                    <textarea class="form-control" aria-label="With textarea" className='contactos-textarea-container'></textarea>
                </div>
                <div className='mt-3'>
                    <button className='nav-button contactos-button'>Send</button>
                </div>
            </div>
        </div>
    )

};

export default Contactos;