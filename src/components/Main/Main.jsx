import "./Main.css";
import bgmeat from "../assets/bgmeat.png";
import bgchicken from "../assets/bgchicken.png";
import ptogrill from "../assets/puntogrill.png";
import Marcas from "../Marcas/Marcas";

const Main =({ greeting="Bienvenidos" })=>{
    return(
        <main>
              <div className="carrusel">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={bgmeat} className="d-block mx-auto img-fluid carrusel " alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Alimentos San Carlos</h5>
                                    <p>Productos de la mejor calidad</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={ptogrill} className="d-block mx-auto img-fluid carrusel " alt="..."/>
                            
                            </div>
                            <div className="carousel-item">
                                <img src={bgchicken} className="d-block mx-auto img-fluid carrusel  " alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Gran variedad de productos, frescos, congelados y precocidos.</h5>
                                   
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <h1 className="saludo">{greeting="Bienvenidos"}</h1>
                <Marcas/>
        </main>
    )
}

export default Main