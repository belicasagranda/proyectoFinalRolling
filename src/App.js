import './App.css';
import Btn from './components/buttons/Btn'
import Tabla from './components/tabla/Tabla';

function App() {
  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <h2>
          Panel Admin usuarios
        </h2>
      </div>
      <Btn title={'Añadir Producto'}/>
      <div className='mx-4'>
        <Tabla primerCol={'Codigo de usuario'}  segCol={'Nombre'} terCol={'Rango'}  cuarCol={'Estado de usuario'} quinCol={'Opciones'}/>
      </div>
    </>
  );
}

export default App;
