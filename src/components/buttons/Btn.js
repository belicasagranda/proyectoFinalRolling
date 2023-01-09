import './btn.css';
import React from 'react'

const Admin = ({title}) => {
  return (
    <div className='d-flex justify-content-end m-5'>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAdmin">{title}</button>
      <section>
      <div className="modal fade" id="modalAdmin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 m-auto" id="exampleModalLabel">Panel Admin Productos</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-1">
              <form>
                <div className="row">
                  <div className="mb-3 col">
                    <label for="title" className="form-label">Nombre/modelo del vehiculo</label>
                    <input type="text" className="form-control" id="" value="" maxlength="50" required/>
                  </div>
                  <div className="mb-3 col">
                    <label for="reparto" className="form-label">Marca del vehiculo</label>
                    <input type="text" className="form-control" id="" value="" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <label className="form-label">Categoria de carroceria</label>
                    <select className="form-select" aria-label="Default select example" id="categoriaPelicula" required>
                      <option value="" selected>Seleccione una Categoria</option>
                      <option>3 puertas</option>
                      <option>4 puertas</option>
                      <option>5 puertas</option>
                      <option>Pick up</option>
                      <option>SUV</option>
                    </select>
                  </div>
                  <div className="mb-3 col">
                    <label for="date" className="form-label">Años</label>
                    <input type="text" className="form-control" id="" maxlength="4" value="" required/>
                  </div>
                </div>                                       
                <div className="row">
                  <div className="mb-3 col">
                    <label for="price" className="form-label">Precio del vehiculo</label>
                    <input type="number" className="form-control" id="" value="" required/>
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">Añade una breve descripcion del vehiculo</label>
                    <input type="text" className="form-control" id="" value="" maxlength="400" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <label className="form-label">Tipo de Transmisión</label>
                    <select className="form-select" aria-label="Default select example" id="" required>
                      <option value="" selected>Seleccione una Categoria</option>
                      <option value="Acción">Manual</option>
                      <option value="Suspenso">Automatico</option>
                    </select>
                  </div>
                  <div className="mb-3 col">
                    <label className="form-label">Tipo de Combustible</label>
                    <select className="form-select" aria-label="Default select example" id="" required>
                      <option value="" selected>Seleccione una Categoria</option>
                      <option value="Acción">Diesel</option>
                      <option value="Suspenso">Nafta</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <label for="image1" className="form-label">Portada</label>
                    <input type="text" className="form-control" id="" maxlength="250" value="" required/>
                  </div>
                  <div className="mb-3 col">
                    <div className="mb-3 col">
                      <div className="mb-3 col-12">
                        <label className="form-label">Kilometraje del vehiculo</label>
                        <input type="number" className="form-control" id="" value="" maxlength="2" min="7" max="18" required/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <label for="image1" className="form-label">imagen2</label>
                    <input type="text" className="form-control" id="" maxlength="250" value="" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <div className="mb-3 col">
                      <div className="mb-3 col-12">
                        <label className="form-label">imagen3</label>
                        <input type="text" className="form-control" id="" maxlength="300" value="" required/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer btnEnviar">
                  <button type="submit" className="btn btn-primary">Cargar Producto</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Admin