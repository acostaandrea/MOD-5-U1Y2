import React from 'react';
import '../styles/components/pages/Home.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eum modi ullam minima expedita neque repellendus tempora rerum quia error sunt odio explicabo aliquid ab hic, corrupti perferendis aliquam eaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis illo, tempora optio corporis nulla itaque rem? Vel perferendis error qui ad neque ex, omnis nisi nemo a doloremque dolore.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez- zapatos.com</span>
                    </div>

                </div>
            </div>
        </main>
    );
}
export default HomePage;