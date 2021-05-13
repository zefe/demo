import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { uiCloseToggle } from '../../stateManagement/actions/uiActions';


export const EditMoments = ({ customer, setCustomerActive }) => {

    const dispatch = useDispatch();
    
    const initMoments = customer;
    const options = [
        {
            id: 1,
            label: "Female",
            value: "F",
        },
        {
            id: 2,
            label: "Male",
            value: 'M',
        }
    ];
    

    
    const [formValues, setFormValues] = useState( initMoments );

    //*Education birthDate
    const { maritalStatus, kids, profession, gender, education, age, city, state } = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

    }

    const handleSubmitFormEdit = (e) => {
        e.preventDefault();
        //Update moments
        setCustomerActive(formValues)
        closeToggle();
    }

    
    const closeToggle = () => {
        dispatch( uiCloseToggle() );
        setFormValues(initMoments);
    }

    return (

        <div className="toggle__main">
            <div className="toggle__header">
                <h5 className="modal-title">Editar Momentos de Vida</h5>
                <button type="button" className="close"  aria-label="Close" onClick={ closeToggle }>
                    <span className="ti-close"></span>
                </button>
                
            </div>
            <div className="toggle__body">
                <form className="container" onSubmit={ handleSubmitFormEdit }>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="maritalStatus">Estado civil</label>
                            <input 
                                type="text"
                                name="maritalStatus"
                                className="form-control"
                                id="maritalStatus"
                                value={ maritalStatus }
                                onChange={ handleInputChange }
                                />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="kids">Hijos</label>
                            <input
                                type="text"
                                name="kids"
                                className="form-control"
                                id="kids" 
                                value={ kids }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="education">Educación</label>
                            <input 
                                type="text"
                                name="education"
                                className="form-control"
                                id="education"
                                value={ education }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="profession">Profesión</label>
                            <input
                                type="text"
                                className="form-control"
                                id="profession"
                                name="profession"
                                value={ profession }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                    
                        <div className="form-group col-md-4">
                            <label htmlFor="gender">Genero</label>
                            <select 
                                className="form-control"
                                id="gender"
                                onChange={ handleInputChange }
                                name="gender"
                                >
                                {options.map((option) => (
                                    <option key={option.id} value={customer.gender}>{option.label}</option>
                                ))}

                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="age">Edad</label>
                            <input
                                type="text"
                                className="form-control"
                                id="age"
                                name="age"
                                value={ age }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="birthday">Cumpleaños</label>
                            <input
                                type="text"
                                className="form-control"
                                id="birthday"
                                name="birthday"
                                //value={ birthday }
                                onChange={ handleInputChange }
                            />
                        </div>

                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">Ciudad</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={ city }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="state">Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                value={ state }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className="toggle__footer">
                        <button type="submit" className="btn btn-primary-custom" data-dismiss="modal"><span className="ti-save"></span> Guardar</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={ closeToggle }> Cancelar</button>
                    </div>

                </form>   
            </div>

        </div>
    )
}
