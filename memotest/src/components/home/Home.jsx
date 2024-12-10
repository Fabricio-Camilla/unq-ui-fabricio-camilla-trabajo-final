import React from 'react';
import { useNavigate } from 'react-router-dom';
import Template from '../template/Template';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

const Home = ({setSize, size}) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!size){
            toast.error('Selecciona un tamaño del tablero para empezar')
        }else{
            navigate('/memotest')
        }
    }

    const handleSize =(e) =>{
        setSize(e.target.value);
    }

    return(
        <Template>
        <ToastContainer position="bottom-right" 
        autoClose={5000} 
        hideProgressBar 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover />
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
                                    <option value={8}>4x4</option>
                                    <option value={18}>6x6</option>
                                    <option value={32}>8x8</option>
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