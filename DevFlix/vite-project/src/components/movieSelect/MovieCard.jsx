import styles from "./MovieSelect.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Description from "./Description";
import { useState } from "react";
import Modal from "../Modal/Modal";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () =>{
    setIsModalOpen(!isModalOpen)
  }
  const poster = `https://image.tmdb.org/t/p/w300/${props.Poster}`
  return (
    <>
    <div className={`m-1 card-body ${styles.card}`}  onClick={toggleModal}>
      <div>
        <p>{props.Year}</p>
      </div>
      <div>
        <img src={poster} alt=""></img>
      </div>
      <div className={`card-title text-light`}>
        <h3>{props.Title}</h3>
        <span>{props.Type}</span>
      </div>


    </div>
    
{isModalOpen &&(
<Modal 
apiUrl={props.apiUrl}
id={props.id}
onClick={toggleModal}
/>
)}

    </>
  );
};

export default MovieCard;
