import { useState } from 'react';
import PropTypes from 'prop-types';

const CambiarEstado = ({ conectado }) => {
    const [connected, setConnected] = useState(conectado);
    const changeEstado = () => {
        setConnected(!connected);
    };

    return (
        <div>
            <p>Estado actual: {connected ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
            <button onClick={changeEstado}>
                Cambiar estado a {connected ? 'desconectado' : 'conectado'}
            </button>
        </div>
    );
};

CambiarEstado.propTypes = {
    conectado: PropTypes.bool.isRequired,
};

export default CambiarEstado;
