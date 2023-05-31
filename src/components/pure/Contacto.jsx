import PropTypes from 'prop-types';
import CambiarEstado from './CambiarEstado'

const Contacto = ({ nombre, apellido, email, conectado }) => {
    return (
        <div>
            <h2>Contacto</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <CambiarEstado>{conectado}</CambiarEstado>
        </div>
    );
};

Contacto.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,
};

export default Contacto;
