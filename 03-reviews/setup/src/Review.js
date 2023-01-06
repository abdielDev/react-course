import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(people[0]);
  const nextReview = () => {
    if(people.length - 1 === review.id - 1) {
      return setReview(people[0])
    }
    setReview(people[(review.id - 1) + 1])
  }
  const previousReview = () => {
    if(review.id - 1 === 0) {
      return setReview(people[people.length - 1])
    }
    setReview(people[(review.id - 1) - 1])
  }
  const randomReview = () => {
    const getRandomNumber = () => Math.floor(Math.random() * people.length);
    return setReview(people[getRandomNumber()])
  }
  const {
     name, job, image, text
  } = review;
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon"><FaQuoteRight /></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={previousReview}><FaChevronLeft /></button>
      <button className="next-btn" onClick={nextReview}><FaChevronRight /></button>
    </div>
    <button className="random-btn" onClick={randomReview}>surprise me</button>
  </article>;
};

export default Review;
