import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { uiOpenToggle } from '../../stateManagement/actions/uiActions';

import person from '../../assets/images/user.jpeg';
import iconStar from '../../assets/icons/icon-star.png';
import iconState  from '../../assets/icons/moments/state.svg';
import iconCity  from '../../assets/icons/moments/city.svg';
import iconBirthday  from '../../assets/icons/moments/birthday.svg';
import iconAge  from '../../assets/icons/moments/age.svg';
import iconGender  from '../../assets/icons/moments/gender.svg';
import iconProfession  from '../../assets/icons/moments/profession.svg';
import iconEducation  from '../../assets/icons/moments/education.svg';
import iconKids  from '../../assets/icons/moments/kids.svg';
import iconHeart  from '../../assets/icons/moments/heart.svg';
import { EditMoments } from './EditMoments';
import { PaymentsChart } from './PaymentsChart';
import { Progress } from '../Common/Progress';
import { Rating } from '../Common/Rating';
import { Switch } from '../Common/Switch';
import { EmogiNeutralFace } from '../Common/EmogiNeutralFace';
import { EmogiSmileFace } from '../Common/EmogiSmileFace';
import { EmogiSadFace } from '../Common/EmogiSadFace';
import { getCustomerById } from '../../helpers/getCustomerById';
import { DateHistory } from '../../helpers/getDateHistory';



export const CustomerDetails = () => {

    const { customerId } = useParams();

    const customer = getCustomerById( customerId);

    const [customerActive, setCustomerActive]  = useState( customer );

    
    const { toggleOpen } = useSelector(state => state.ui);
    
    const [ accepted,  setAccepted ] = useState(true);
    
    const dispatch = useDispatch();

    const openToggle = () => {
        dispatch( uiOpenToggle() );
    }

    const [ratingFace, setRatingFace] = useState('')
    const [smileFace, setSmileFace] = useState(false);
    const [neutralFace, setNeutralFace] = useState(false);
    const [sadFace, setSadFace] = useState(false)

    const currentlyDate = new Date();
    const dateHistory = DateHistory(currentlyDate, 'dd/mm/yy');

    const [ txtFeedback, setTxtFeedback ] = useState('');

    return (
        <section className="customer">
            
            <div className="title-customers-deatils" >
                <h3>Detalles de cliente</h3>
            </div>

            <div className="customer-container">
                <div className="customer-wrapper">
                    <div className="customer-avatar">
                        <div className="customer-img">                            
                            <img src={person} alt="" srcset="" />
                        </div>
                        <strong>{customer.nombre}</strong>
                        <span>{customer.correo}</span>
                    </div>
                    <div className="customer-summary">                
                        <span class="ti-user"></span>      
                        <div className="customer-info">
                            <small>Perfil</small>
                            <h1>{customer.perfil}</h1>
                        </div>
                    </div>
                    <div className="customer-summary">                        
                        <span class="ti-check-box"></span>
                        <div className="customer-info">
                            <small>Puntos de lealtad</small>
                            <h1>{customer.puntosDeLealtad}</h1>
                        </div>
                    </div>
                    <div className="customer-summary"> 
                        <span class="ti-id-badge"></span> 
                        <div className="customer-info">
                            <small>Transpais ID</small>
                            <h1>00{customer.transpaisId} </h1>
                        </div>
                    </div>


                </div>
            </div>

            <div className="recomendations">
                <h1>Recomendaciones</h1>
                <div className="recommendations-wrapper">
                    {
                        customer.recommendationsList.map((recommendation, key) => {
                            return(
                                <div className="recomm-card" key={key}>
                                    <img src={ iconStar } alt="" srcset=""/>
                                    <p>{recommendation.tipoDeRecomendacion}</p>
                                    <div className="recomm-action">
                                        <p>Recomendación aceptada</p>
                                        <Switch />
                                    </div>            
                                </div>
                            )
                        })
                    }
                </div>
            </div>
   
            
            { 
                toggleOpen && <EditMoments customer={ customer } setCustomerActive={setCustomerActive} />
            }
            <div className="insights-container">
                <div className="insights-wrapper">
                    <div className="insights-data">
                        <div className="card-title">
                            <h3>Insights de Viajes</h3>
                        </div>
                        <div className="insights-routes">
                            {
                                customer.insightsList.map( insight => {
                                    return(
                                        <div className="destination">
                                            <p>{insight.viaje}</p>
                                            <small>{insight.descripcionDeViaje}</small>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    
                    </div>                  
                    
                    
                    <div className="history-card">
                        <div className="card-title">
                            <h3>Historial de ofertas</h3>
                        </div>
                        <div className="history-card-data">
                            <div className="history-row-card">   
                                <h5>Tipo</h5>
                                <small>{ customer.tipoDeViaje }</small>
                                <h5>Fecha</h5>
                                <small>{ dateHistory}</small>
                                <h5>Oferta</h5>
                                <small>{ customerActive.recommendationsList[0].tipoDeRecomendacion }</small>
                                <h5>Ruta</h5>                            
                                <small>{ customerActive.insightsList[0].viaje }</small>
                                <h5>Estado de la oferta</h5>                            
                                <small>{ customerActive.estatusDeRecomendacion}</small>
                                {
                                    (customerActive.estatusDeRecomendacion === 'Aceptado') ?
                                    <span class="ti-check acepted"></span> :
                                    <span class="ti-close rejected"></span>

                                }

                            </div>
                        </div>
                    </div>

                    <div className="feedback-card">
                        <div className="card-title">
                            <h3>Retroalimentación del cliente</h3>
                        </div>
                        <div className="feedback-card-data">

                            <div className="satisfaction">
                                <div>
                                    <h5>Satisfacción</h5>
                                    <div className="emogis"> 
                                        <EmogiSadFace
                                            onClick={() =>
                                                {
                                                    setSadFace(!sadFace)
                                                    setRatingFace(sadFace ? '' : 'sad')
                                                    setNeutralFace(false)
                                                    setSmileFace(false)
                                                }
                                            }
                                            sadFace={ sadFace }
                                        />

                                        <EmogiNeutralFace 
                                            onClick={() =>
                                                {
                                                    setNeutralFace(!neutralFace)
                                                    setRatingFace(neutralFace ? '' : 'neutral')
                                                    setSadFace(false)
                                                    setSmileFace(false)
                                                }
                                            }
                                            neutralFace={ neutralFace }
                                        />

                                        <EmogiSmileFace 
                                            onClick={() =>
                                                {
                                                    setSmileFace(!smileFace)
                                                    setRatingFace(smileFace ? '' : 'smile')
                                                    setSadFace(false)
                                                    setNeutralFace(false)
                                                }
                                            }
                                            smileFace={ smileFace }
                                        />

                                    </div>
                                    
                                </div>
                            </div>

                            <div className="rating-container">
                                <p>¿Qué tan probable es que recomiende nuestra empresa?</p>
                                <div className="raiting-stars">
                                    <Rating />
                                </div>
                            </div>
                            
                            <div className="comments">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Comentarios</label>
                                    <textarea 
                                    className="form-control" 
                                    id="txtFeedback"
                                    name="txtFeedback"
                                    rows="3"
                                    value={ txtFeedback }
                                    onChange={(e)=> {
                                        e.preventDefault()
                                        setTxtFeedback(e.target.value);
                                    }}
                                    />
                                </div>
                                {
                                    (txtFeedback.length >= 3) &&
                                    <button type="submit" className="btn btn-primary-custom" data-dismiss="modal"><span className="ti-save"></span> Save</button>
                            
                                }
                                
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>


            <div className="customer-moments">
                <div className="moments-card">
                    <div className="moments-card-header">
                        <h3>Momentos de Vida</h3>
                        <button className="btn btn-primary-custom" onClick={ openToggle }>
                            <span className="ti-pencil-alt"></span>
                        </button>
                    </div>
                    <div className="moments">
                        <div className="moment">
                            <div className= { customerActive.estatusMarital !== 'Casado' ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconHeart } alt="" />
                            </div>
                            <div>
                                <h5>Estado civil</h5>
                                <small>{ customerActive.estatusMarital }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className={ customerActive.hijos <= 0 ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconKids } alt="" />
                            </div>
                            <div>
                                <h5>Niños</h5>
                                <small>{customerActive.hijos}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className={ customerActive.educacion <= 0 ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconEducation } alt="" />
                            </div>
                            <div>
                                <h5>Educación</h5>
                                <p>{customerActive.educacion}</p>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconProfession } alt="" />
                            </div>
                            <div>
                                <h5>Profesión</h5>
                                <small>{customerActive.profesion}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconGender } alt="" />
                            </div>
                            <div>
                                <h5>Genero</h5>
                                <small>{ customerActive.genero }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconAge } alt="" />
                            </div>
                            <div>
                                <h5>Edad</h5>
                                <small>{ customerActive.age}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon moment-icon-outline">
                                <img src={ iconBirthday } alt="" />
                            </div>
                            <div>
                                <h5>Cumleaños</h5>
                                <small>{}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconCity } alt="" />
                            </div>
                            <div>
                                <h5>Ciudad</h5>
                                <small>{ customerActive.ciudad }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconState } alt="" />
                            </div>
                            <div>
                                <h5>Estado</h5>
                                <small>{ customerActive.estado}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        

        </section>
        
    )
}
