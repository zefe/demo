import React from 'react';
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

export const Customer = () => {
    
    const { toggleOpen } = useSelector(state => state.ui);
    
    const dispatch = useDispatch();

    const openToggle = () => {
        dispatch( uiOpenToggle() );
    }

    return (
        <section className="customer">
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
                            <span className="ti-pencil"></span>
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
                        <div className="row-card">   
                            <h5>Date</h5>
                            <small>23/02/2020</small>
                            <h5>Offer</h5>
                            <small>10% discount</small>
                            <h5>Reason</h5>
                            <small>Cancel</small>
                            <h5>Accepted</h5>
                            <small>swithc</small>
                        </div>
                    </div>

                </div>
                <div className="products-card">
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
                <div className="product-recomm-card">
                    <div className="card-title">
                        <h3>Cross-Sell</h3>
                    </div>
                    
                </div>
            </div>
        

        </section>
    )
}
