import React from 'react';
import { useNavigate } from 'react-router-dom';
import Template from '../template/Template';
import './Home.css'

const Home = ({setSize, size}) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!size){
           console.log("selecciona un tamanio del tablero") //cambiar por toast
        }else{
            navigate('/memotest')
        }
    }

    const handleSize =(e) =>{
        setSize(e.target.value);
    }

    return(
        <Template>
            <div className='container'>
                <div className='box'>
                    <div className='title-h2'>
                        <h2>¿Estás listo para jugar?</h2>
                    </div>
                    <div className='title-h2'>
                        <h2>Elegi el tamaño del tablero</h2>
                        <div className='select'>
                            <select className='size-select' onChange={handleSize}>
                                <option value="">Seleccionar una opcion</option>
                                    <option>4x4</option>
                                    <option>6x6</option>
                                    <option>8x8</option>
                            </select>               
                        </div>         
                    </div>
                    <button onClick={handleSubmit}>¡Empezar!</button>

                </div>
            </div>
        </Template>
    )
}

export default Home;