import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import DevGithub from './DevGithub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Icon } from '@mui/material';


const Footer = () => {
  return (
     <footer className='footer mt-3 p-3'>
        <div className='container'>
            <div className='row'>

            <div className='col-12 col-md-4 text-center'>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-2'><InstagramIcon /> </a>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-2'> <YouTubeIcon /> </a>
                <a href="https://instagram.com/netflix" className='text-decoration-none text-danger fw-bolder mx-2 '><FacebookIcon /></a>

            </div>
            <div className='col-12 col-md text-center mt-2 mt-md-0 text-decoration-none text-lg-center'>
                <p>
                Projeto desenvolvido por: 
                   <DevGithub github="https://github.com/JoaoFCosta" devNome="@JoaoFCosta" />| <DevGithub github="https://github.com/Joaquimtxt" devNome="@Joaquimtxt"/>| <DevGithub github="https://github.com/LLuizXL" devNome="@LLuizXL"/>
                </p>
            
                </div>
            </div>
        
        </div>
        <hr className='text-light'/>
        <div className=' col-12 text-center fw-bolder text-danger'> &copy; DEVFLIX | Nenhum Direito reservado. </div>
     </footer>
  )
}

export default Footer;
