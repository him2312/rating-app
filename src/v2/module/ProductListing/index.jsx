import React, { Component } from 'react';
import { Container, ProductTitle, ProductRating, Rating, ReviewContainer, ReviewTitle, RatingContainer, AllReviews, ReviewRow, Review} from './styles';
import { initializeFirebase } from '../../firebase/firebase.service';
import { computeAverageRating } from '../../utils/utils';

import Button from '../../components/Button';
import { Star } from '../../components/Star/Star';
import {Loader} from '../../components/Loader.jsx';
import Overlay from '../../components/Overlay';

class ProductListing extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      reviews: [],
      averageRating: 0,
      showAddReviewOverlay: false,
      isLoading: true
    }
  }

  componentDidMount(){
    initializeFirebase(this.setDataToState.bind(this));
  }

  setDataToState(data) {
    let averageRating = computeAverageRating(data.reviews);
    this.setState({ ...data, averageRating, isLoading: false });
  }

  openAddReviewOverlay() {
    this.setState({
      showAddReviewOverlay: true
    })
  }

  closeAddReviewModal() {
    this.setState({
      showAddReviewOverlay: false
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }

    return (
      <Container>
        <ProductTitle>
            {this.state.title}
        </ProductTitle>
        <ProductRating>
            <RatingContainer>
              <Rating>{this.state.averageRating}</Rating>
              <Star resize viewOnly rating={this.state.averageRating}/>
            </RatingContainer>
            <div>
              <Button type="small" onClick={() => this.openAddReviewOverlay()}>
                Add review
              </Button>
            </div>
        </ProductRating>
        <ReviewContainer>
            <ReviewTitle>Reviews</ReviewTitle>
            <AllReviews>
              {
                this.state.reviews.map((reviewContent, index) => {
                  return <ReviewRow key={index}>
                      <Star leftShift viewOnly rating={reviewContent.rating}/>
                      <Review>
                        <span className="review-rating">{reviewContent.rating}, </span>
                        <span className="review-text">{reviewContent.review}</span>
                      </Review>
                  </ReviewRow>
                })
              }
            </AllReviews>
        </ReviewContainer>

        <Overlay closeModal={this.closeAddReviewModal.bind(this)} showModal={this.state.showAddReviewOverlay}/>
      </Container>
    )
  };
}

export default ProductListing;