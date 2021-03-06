import React from 'react';
import '../styles/components/pages/Contacto.css'
const ContactoPage = (props) => {
    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="comentario">Comentario</label>
                    <textarea id="comentario"></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>

        </div>
        <div className="columna right">
            <h2>Otras vías de contacto</h2>
            <p>Tambien se puede comunicar con nosotros...</p>
            <ul>
                <li>Telefono: 4578-78578</li>
                <li>Email: contacto@transporteX.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Skype:</li>
                </ul>

        </div>


    </main>
    );
}
export default ContactoPage;