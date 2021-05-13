import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { uiOpenToggle } from '../../stateManagement/actions/uiActions';

import personMedium from '../../assets/images/medium.png';
import personHigh from '../../assets/images/high.png';
import personLow from '../../assets/images/low.png';

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



export const Customer = () => {

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

    return (
        <section className="customer">
            
            <div className="title-customers-deatils" >
                <h3>Customer Details</h3>
            </div>
        { 
            toggleOpen && <EditMoments customer={ customer } setCustomerActive={setCustomerActive} />
        }
            <div className="customer-grid">
                <div className="customer-card">
                    <div className="avatar">
                        <img src={ 
                            (customer.retentionScore === 'High') && personHigh ||
                            (customer.retentionScore === 'Low') && personLow  ||
                            (customer.retentionScore === 'Medium') && personMedium  
                            } 
                            alt="Customer avatar" 
                        />
                    </div>
                    <div className="customer-information">                
                        <p><strong> Id </strong> { customerActive.id }</p>
                        <p><strong> Clv </strong>${ customerActive.clv }</p>
                        <div className="customer-clv-badge">
                            <p><strong>Action</strong></p>
                            <span className={`badge ${customer.retentionScore }`}>
                                { customerActive.action}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="moments-card">
                    <div className="moments-card-header">
                        <h3>Life Moments</h3>
                        <button className="btn btn-primary-custom" onClick={ openToggle }>
                            <span className="ti-pencil-alt"></span>
                        </button>
                    </div>
                    <div className="moments">
                        <div className="moment">
                            <div className= { customerActive.maritalStatus !== 'Married' ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconHeart } alt="" />
                            </div>
                            <div>
                                <h5>Marital status</h5>
                                <small>{ customerActive.maritalStatus }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className={ customerActive.kids <= 0 ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconKids } alt="" />
                            </div>
                            <div>
                                <h5>Kids</h5>
                                <small>{customerActive.kids}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className={ customerActive.education <= 0 ? ' moment-icon moment-icon-outline' : `moment-icon` }>
                                <img src={ iconEducation } alt="" />
                            </div>
                            <div>
                                <h5>Education</h5>
                                <p>{customerActive.education}</p>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconProfession } alt="" />
                            </div>
                            <div>
                                <h5>Profession</h5>
                                <small>{customerActive.profession}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconGender } alt="" />
                            </div>
                            <div>
                                <h5>Gender</h5>
                                <small>{ customerActive.gender }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconAge } alt="" />
                            </div>
                            <div>
                                <h5>Age</h5>
                                <small>{ customerActive.age}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon moment-icon-outline">
                                <img src={ iconBirthday } alt="" />
                            </div>
                            <div>
                                <h5>Birth</h5>
                                <small>{}</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconCity } alt="" />
                            </div>
                            <div>
                                <h5>City</h5>
                                <small>{ customerActive.city }</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconState } alt="" />
                            </div>
                            <div>
                                <h5>State</h5>
                                <small>{ customerActive.state}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="data-grid">
                <div className="history-card">
                    <div className="card-title">
                        <h3>Data History</h3>
                    </div>
                    <div className="history-card-data">
                        <div className="history-row-card">   
                            <h5>Date</h5>
                            <small>{dateHistory}</small>
                            <h5>Offer</h5>
                            <small>{ customerActive.offer }</small>
                            <h5>Reason</h5>
                            <small>{ customerActive.reason }</small>
                            <h5>Offer status</h5>                            
                            <small>{ customerActive.offerStatus }</small>
                            {
                                /*                                    
                                    <Switch
                                        onChange={(event) => setAccepted(event.target.checked)}
                                    />
                                */
                            }
                        </div>
                    </div>

                </div>
                <div className="payments-card">
                    <div className="card-title">
                        <h3>Products</h3>
                    </div>
                    <div className="products-card-data">
                        <div className="product">
                            <div className="product-header">
                                <div>
                                    <h5>C&A Brades Card</h5>
                                    <p>Credit</p>
                                </div>
                                <div className="product-icon">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="product-footer">
                                <p>Credit Line</p>
                                <h4>$60,000.00</h4>
                            </div>                            
                        </div>
                        <div className="product">
                            <div className="product-header">
                                <div>
                                    <h5>C&A Brades Card</h5>
                                    <p>Credit</p>
                                </div>
                                <div className="product-icon">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="product-footer">
                                <p>Credit Line</p>
                                <h4>$50,000.00</h4>
                            </div>                            
                        </div>
                        <div className="product">
                            <div className="product-header">
                                <div>
                                    <h5>C&A Brades Card</h5>
                                    <p>Credit</p>
                                </div>
                                <div className="product-icon">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="product-footer">
                                <p>Credit Line</p>
                                <h4>$50,000.00</h4>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="cross-sell-card">
                    <div className="card-title">
                        <h3>Cross-Sell</h3>
                    </div>
                    <div className="cross-sell-content">
                        <div className="progress-container">
                            <h5>{ customerActive.crossSell1 }</h5>
                            <Progress done={customerActive.crossSell1Score.toFixed()} />

                            <h5>{ customerActive.crossSell2 }</h5>
                            <Progress done={customerActive.crossSell2Score.toFixed()} />

                            <h5>{ customerActive.crossSell3 }</h5>
                            <Progress done={customerActive.crossSell3Score.toFixed()} />
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* products */}
            <div className="products">
                <div className="products-card">
                    <div className="card-title">
                        <h3>Payments</h3>
                    </div>                    
                    <div className="payments-card-data">
                        <PaymentsChart />
                    </div>
                                        
                </div>
                <div className="feedback-card">
                    <div className="card-title">
                        <h3>Customer Feedback</h3>
                    </div>
                    <div className="feedback-card-data">

                        <div className="satisfaction">
                            <div>
                                <h5>Offer Accepted</h5>
                                <Switch onChange={(event) => setAccepted(event.target.checked)} />
                            </div>
                            <div>
                                <h5>Satisfaction</h5>
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
                            <p>How likely would you recommend our company?</p>
                            <div className="raiting-stars">
                                <Rating />
                            </div>
                        </div>
                        
                        <div className="comments">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Comments</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-custom" data-dismiss="modal"><span className="ti-save"></span> Save</button>
                        
                        </div>

                        
                    </div>
                </div>

            </div>
            

        

        </section>
    )
}
