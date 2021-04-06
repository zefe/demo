import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { uiOpenToggle } from '../../stateManagement/actions/uiActions';

import person from '../../assets/images/person.png';
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

export const Customer = () => {
    
    const { toggleOpen } = useSelector(state => state.ui);
    
    const [ accepted,  setAccepted ] = useState(false);
    
    const dispatch = useDispatch();

    const openToggle = () => {
        dispatch( uiOpenToggle() );
    }

    const [ratingFace, setRatingFace] = useState('')
    const [smileFace, setSmileFace] = useState(false);
    const [neutralFace, setNeutralFace] = useState(false);
    const [sadFace, setSadFace] = useState(false)

    return (
        <section className="customer">
            
            <div className="title-customers-deatils" >
                <h3>Customer Details</h3>
            </div>
        { 
            toggleOpen && <EditMoments />
        }
            <div className="customer-grid">
                <div className="customer-card">
                    <img src={ person } alt="Customer avatar" />
                    <p><strong> ID </strong> 84HD056</p>
                    <p><strong> CLV </strong>$521, 728</p>
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
                            <div className="moment-icon">
                                <img src={ iconHeart } alt="" />
                            </div>
                            <div>
                                <h5>Marital status</h5>
                                <small>Married</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconKids } alt="" />
                            </div>
                            <div>
                                <h5>Kids</h5>
                                <small>2</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon moment-icon-outline">
                                <img src={ iconEducation } alt="" />
                            </div>
                            <div>
                                <h5>Education</h5>
                                <p>Bachelor's degree</p>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconProfession } alt="" />
                            </div>
                            <div>
                                <h5>Profession</h5>
                                <small>Teacher</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconGender } alt="" />
                            </div>
                            <div>
                                <h5>Gender</h5>
                                <small>F</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon moment-icon-outline">
                                <img src={ iconAge } alt="" />
                            </div>
                            <div>
                                <h5>Age</h5>
                                <small>45</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconBirthday } alt="" />
                            </div>
                            <div>
                                <h5>Birth</h5>
                                <small>10/05/1980</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconCity } alt="" />
                            </div>
                            <div>
                                <h5>City</h5>
                                <small>LA</small>
                            </div>
                        </div>
                        <div className="moment">
                            <div className="moment-icon">
                                <img src={ iconState } alt="" />
                            </div>
                            <div>
                                <h5>State</h5>
                                <small>California</small>
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
                            <small>23/02/2020</small>
                            <h5>Offer</h5>
                            <small>10% discount</small>
                            <h5>Reason</h5>
                            <small>Cancel</small>
                            <h5>Accepted</h5>
                            <Switch onChange={(event) => setAccepted(event.target.checked)} />
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
                            <h5>Product 10</h5>
                            <Progress done="70" />

                            <h5>Product 7</h5>
                            <Progress done="36" />

                            <h5>Product 20</h5>
                            <Progress done="25" />
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
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Comments</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-custom" data-dismiss="modal"><span className="ti-save"></span> Save</button>
                        
                        </div>

                        
                    </div>
                </div>

            </div>
            

        

        </section>
    )
}
