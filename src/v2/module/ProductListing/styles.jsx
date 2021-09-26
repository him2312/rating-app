import styled from 'styled-components';
import { ts20n, ts28b, ts44b } from '../../typography/fonts';

export const Container = styled.div`
  text-align: center;
  background: #ffffff;
  margin-top: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20%;
  @media screen and (max-width: 700px) {
    padding: 0px 10%;
  }
`;

export const ProductTitle = styled.div`
  ${ts44b}
  color: #000000;
`

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #B9B9B9;
  padding-bottom: 57px;
  padding-top: 43px;
  width: 100%;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Rating = styled.div`
  ${ts20n}
  margin-bottom: 4px;
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
`

export const ReviewTitle = styled.div`
  display: flex;
  ${ts28b}
  margin-bottom: 30px;
  margin-top: 40px;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`

export const AllReviews = styled.div`

`

export const ReviewRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    display: block;
  }
`

export const Review = styled.div`
    text-align: left;
    margin-left: 10px;
    @media screen and (max-width: 700px) {
      text-align: center;
    }
    .review-rating {
      font-weight: 700;
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
    .review-text {
      font-weight: 400;
      color: #858585;

      overflow-wrap: break-word;
      word-wrap: break-word;
    
      -ms-word-break: break-all;
      word-break: break-all;
      word-break: break-word;
    
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
`