import React from 'react';
import Template from './Template';
import './Home.css'

const Home = () => {
    return(
        <Template>
            <div className='container'>
                <div className='box'>
                    <div className='title-h2'>
                        <h2>¿Estás listo para jugar?</h2>
                    </div>
                    <button >¡Empezar!</button>
                </div>
            </div>
        </Template>
    )
}

export default Home;