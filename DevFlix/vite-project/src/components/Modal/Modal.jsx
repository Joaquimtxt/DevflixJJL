import styles from './Modal.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from 'react';

const Modal = (props) => {

    const [movieInfo, setMovieInfo] = useState([])

    useEffect(() =>{
        fetch(`${props.apiUrl}search/`)
    })

  return (
   
<div className='modal fade show d-block' data-bs-toggle="modal">

  <div className='modal-dialog modal-lg '>
    <div className='modal-content'>
        <div className='modal-header d-flex flex-row-reverse'>
            <button type='button' className='btn btn-close d-flex align-items-center justify-content-center'
             onClick={props.onClick}></button>
        </div>
        <div className='row g-0'>
            <div className='col-md-6 d-flex'>
                <img src='https://placehold.co/300x300'  className={`modal-body  d-flex text-center align-items-center ${styles.posterModel}` }>

                </img>
            </div>
            <div className='col-md d-flex flex-column p-2'>
                <div className='d flex flex-column'>
                <h1 className='fw-light' >Movie Title</h1>
                <p>Movie Genre</p>
                </div>

                <div className=''>
                    <img className=' rounded-circle' src='https://placehold.co/50x50'></img>
                </div>

                <div className=''>
                    <p> Rating ⭐ </p>
                </div>

                <div className=' mt-3'>
                    Movie description
                </div>
            </div>
        </div>
    </div>
  </div>
</div>


  )
}

export default Modal