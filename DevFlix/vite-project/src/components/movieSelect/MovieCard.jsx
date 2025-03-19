import styles from './MovieSelect.module.css'

const MovieCard = (props) => {
  return (
    <div className={`m-1 card-body ${styles.card}`}>
    <div>
     <p>{props.Year}</p>
     </div> 
<div>
     <img src={props.Poster} alt=""></img> 
     </div>
     <div>
     <h3 className={`card-title text-light`}>{props.Title}</h3>  
     <span>{props.Type}</span>
   </div>
   </div>
  )
}

export default MovieCard