import React, { useRef } from 'react';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phoneNumber");

    const ratingRef = useRef(null);
    const commentRef = useRef(null);
    const plane = useRef(null);

    const user = {
        name: name,
        email: email,
        phone: phone,
        membership: 'Gold Member',
        travelPreferences: ['Window seat', 'Vegetarian meal', 'Extra legroom']
    };

    const submit = async (e) => {
        e.preventDefault();
        const rating = ratingRef.current.value;
        const comment = commentRef.current.value;
        const id = plane.current.value;
        const res = await axios.post(`http://localhost:8000/${id}/reviews`, { rating, comment });
        console.log(res.data);
    };
    console.log(phone);
    return (
        <div className="airplane-theme">
            <header>
                <h4>My Airline Profile</h4>
            </header>
            <div className="container">
                <div className="card-1">
                    <div className="card-content">
                        <div className="center-text">
                            <h3>{user.name}</h3>
                            <p className="body2">{user.membership}</p>
                        </div>
                        <div className="icon-text">
                            <span className="icon">📧</span>
                            <p className="subtitle1">{user.email}</p>
                        </div>
                        <div className="icon-text">
                            <span className="icon">📞</span>
                            <p className="subtitle1">{user.phone}</p>
                        </div>
                        <h4>Travel Preferences</h4>
                        <ul className="list">
                            {user.travelPreferences.map((preference, index) => (
                                <li key={index} className="list-item">
                                    {preference}
                                </li>
                            ))}
                        </ul>
                        <div className="comment col-8 mb-3">
                            <div className="card-body mb-2 ms-2">
                                <h5 className="card-title">m</h5>
                                <p className="card-text">k</p>
                                <p className="starability-result card-text" data-rating="<%=review.rating%>">
                                    Rated: 3 stars
                                </p>
                            </div>
                        </div>
                        <div className="col-8 offset-3">
                            <hr />
                            <h4>Leave a Rating</h4>
                            <div className="mt-3 mb-3">
                                    <form onSubmit={submit}>
                                     {<div ref={plane} value='1'>
                                        <div className="rate">
                                            <input ref={ratingRef} type="radio" id="star5" name="rating" value="5" />
                                            <label htmlFor="star5" title="text">5 stars</label>
                                            <input ref={ratingRef} type="radio" id="star4" name="rating" value="4" />
                                            <label htmlFor="star4" title="text">4 stars</label>
                                            <input ref={ratingRef} type="radio" id="star3" name="rating" value="3" />
                                            <label htmlFor="star3" title="text">3 stars</label>
                                            <input ref={ratingRef} type="radio" id="star2" name="rating" value="2" />
                                            <label htmlFor="star2" title="text">2 stars</label>
                                            <input ref={ratingRef} type="radio" id="star1" name="rating" value="1" />
                                            <label htmlFor="star1" title="text">1 star</label>
                                        </div>
                                        <textarea ref={commentRef} name="comment" className="form-control mb-2" required></textarea>
                                        <button type="submit" className="btn btn-outline-dark">Submit</button>
                                    </div>}
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
