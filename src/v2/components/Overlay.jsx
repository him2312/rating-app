import React, { Component } from 'react';
import styled from 'styled-components';
import { ts20n, ts24n, ts44b } from '../typography/fonts';
import Button from './Button';
import { Star } from './Star/Star';
import { v4 as uuidv4 } from 'uuid';
import { submitReview } from '../firebase/firebase.service';

const OverlayContainer = styled.div`
    display: ${props => props.showModal ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    margin: 15% auto;
    padding: 50px;
    width: 50%;
    background: #FFFFFF;
    border-radius: 20px;
    @media screen and (max-width: 700px) {
        padding: 20px;
        width: 80%;
    }
`

const Close = styled.button`
    color: #aaa;
    float: right;
    height: 35px;
    width: 35px;
    font-size: 20px;
    border: 0.5px solid #bdbdbd;
    border-radius: 4px;
    cursor: pointer;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`

Header.Title = styled.div`
    ${ts44b}
    color: #000;
    @media screen and (max-width: 700px) {
        font-size: 25px;
    }
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`

const Rating = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 40px;
`

const Review = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    textarea {
        resize: none;
        border: none;
        width: 100%;
        padding: 10px 0px;
        ${ts20n}
        color: #929292;
        ::placeholder {
            font-size: 20px;
            @media screen and (max-width: 700px) {
                font-size: 16px;
            }
            opacity: 0.6;
        }
        @media screen and (max-width: 700px) {
            font-size: 16px;
        }
    }
`

const SubTitle = styled.div`
    ${ts24n}
    color: #000000;
    margin-bottom: 20px;
    @media screen and (max-width: 700px) {
        font-size: 18px;
    }
`

const ModalFooter = styled.div`
    display: flex;
    margin-top: 40px;
`

class Overlay extends Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
            review: ''
        }
    }

    pushReviewToFirebase() {
        let data = {
          review: this.state.review,
          rating: this.state.rating,
          id: uuidv4()
        }
        submitReview(data, this.props.closeModal());
    }

    updateReview(event) {
        this.setState({
            review: event.target.value
        })
    }

    updateRatingValue(value) {
        this.setState({
            rating: value
        })
    }
    
    render() {
        return <OverlayContainer showModal={this.props.showModal}>
            <ModalContent>
                <Header>
                    <Header.Title>What’s your rating?</Header.Title>
                    <Close onClick={() => this.props.closeModal()}>X</Close>
                </Header>
                <ModalBody>
                    <Rating>
                        <SubTitle>Rating</SubTitle>
                        <Star leftShift updateParent={this.updateRatingValue.bind(this)}/>
                    </Rating>
                    <Review>
                        <SubTitle>Review</SubTitle>
                        <textarea placeholder="Start typing..." value={this.state.review} onChange={(e) => this.updateReview(e)}>

                        </textarea>
                    </Review>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => this.pushReviewToFirebase()}>
                        Submit review
                    </Button>
                </ModalFooter>
            </ModalContent>
        </OverlayContainer>;
    }
}

export default Overlay;