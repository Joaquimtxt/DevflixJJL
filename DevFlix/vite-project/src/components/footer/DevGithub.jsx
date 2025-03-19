import styles from './Footer.module.css'

const DevGithub = (props) => {
  return (
    <a href={props.github} className='fw-bolder text-decoration-none text-secondary'>  {props.devNome} </a>
  )
}

export default DevGithub