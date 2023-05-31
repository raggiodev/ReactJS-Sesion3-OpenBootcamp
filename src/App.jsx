import Contacto from './components/pure/Contacto';

const App = () => {

    return (
        <div>
            <Contacto
                nombre="Lionel"
                apellido="Messi"
                email="messi@gmail.com"
                conectado="true"
            />
        </div>
    );
};

export default App;
