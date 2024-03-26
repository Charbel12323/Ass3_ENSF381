import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';
import { useNavigate } from 'react-router-dom';
import './css/HomeMainSection.css'


function HomeMainSection() {
    const navigate = useNavigate();
    const [randomReviews, setRandomReviews] = useState([])

    useEffect(() => {
        const shuffled = [...reviews].sort(() => 0.5 - Math.random());
        setRandomReviews(shuffled.slice(0, 2));
    }, []);

    return (
        <>
            <div className='Body'>
                <section className='About'>
                    <h1>About Us</h1>
                    <p>At The Whitslers, we believe that a suit is much more than just an outfit—it's a statement of professionalism, confidence, and style. Founded in 2019 with the vision of bringing high-quality, bespoke suits to the modern professional, we've dedicated ourselves to crafting garments that not only fit perfectly but also stand the test of time. Our suits are designed with a keen eye for detail, utilizing only the finest fabrics sourced from renowned mills around the world. Whether you're preparing for a pivotal moment in your career or celebrating a personal milestone, our collection is curated to ensure that every individual can find a suit that matches not just their measurements, but their personality and lifestyle as well. At The Whistlers, we're not just selling suits—we're equipping you for success and moments that matter.</p>
                    <button onClick={() => navigate('/products')}>Shop Now</button>
                </section>
            </div>
            <section className='review'>
                <h1>Customer Reviews</h1>
                <div className="reviews-container">
                    {randomReviews.map(review => (
                        <div key={review.customerName} className="review-card">
                            <h3>{review.customerName}</h3>
                            <p>{review.reviewContent}</p>
                            <p className="review-rating">{'⭐'.repeat(review.stars)}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default HomeMainSection;