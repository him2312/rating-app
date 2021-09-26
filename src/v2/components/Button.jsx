import React, { Component } from 'react';
import styled from 'styled-components';
import { tsBtn } from '../typography/fonts';

const ButtonWrapper = styled.button`
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    ${tsBtn}
    color: #797874;
    padding: 10px 14px;
    cursor: pointer;
    @media screen and (max-width: 350px) {
        padding: 10px 10px;
        font-size: 15px;
    }
`

class Button extends Component {
    render() {
        return <ButtonWrapper onClick={this.props.onClick}>
            {this.props.children}
        </ButtonWrapper>;
    }
}

export default Button;