import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Footer = () => {
  return (
    <footer className="mt-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-center">
            <a
              href="https://instagram.com/netflix"
              className="text-decoration-none text-danger fw-bolder mx-3"
            >
              <img src="https://placehold.co/60x60"></img>
            </a>
            <a
              href="https://instagram.com/netflix"
              className="text-decoration-none text-danger fw-bolder mx-3"
            >
              <img src="https://placehold.co/60x60"></img>
            </a>
            <a
              href="https://instagram.com/netflix"
              className="text-decoration-none text-danger fw-bolder mx-3"
            >
              <img src="https://placehold.co/60x60"></img>
            </a>
          </div>
          <div className="col-12 col-md text-center mt-2 mt-md-0 p-md-3 text-decoration-none ">
            <div className="credits text-danger">
              Projeto desenvolvido por:
              <a
                href="https://github.com/JoaoFCosta"
                className="fw-bolder text-decoration-none text-secondary"
              >
                {" "}
                @JoaoFCosta{" "}
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/JoaoFCosta"
                className="text-decoration-none fw-bolder text-secondary"
              >
                {" "}
                @Joaquimtxt{" "}
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/JoaoFCosta"
                className="text-secondary text-decoration-none fw-bolder"
              >
                {" "}
                @LLuizXL{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </footer>
  );
};

export default Footer;
