import styles from './Footer.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import DevGithub from './DevGithub';

const Footer = () => {
  return (
     <footer className='mt-2'>
        <div className='container'>
            
        <div className='row'>
            <div className='col-12 col-md-4 text-center'>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-3'><img src='https://placehold.co/60x60'></img></a>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-3'><img src='https://placehold.co/60x60'></img></a>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-3'><img src='https://placehold.co/60x60'></img></a>

            </div>
            <div className='col-12 col-md text-center mt-2 mt-md-0 p-md-3 text-decoration-none '>
                <div className='credits text-danger'>
                Projeto desenvolvido por: 
                   <DevGithub github="https://github.com/JoaoFCosta" devNome="@JoaoFCosta" />| <DevGithub github="https://github.com/Joaquimtxt" devNome="@Joaquimtxt"/>| <DevGithub github="https://github.com/LLuizXL" devNome="@LLuizXL"/>
                </div>
            </div>
        </div>
        <div className='row'>
        </div>
        </div>
     </footer>
  )
}

export default Footer