import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    background: url("https://assets.gumroad.com/packs/static/b352f00d80565f166a59.svg");
    animation: spin 1.5s linear infinite;

    background-size: contain;
    height: 50px;
    left: calc(50% - 25px);
    position: absolute;
    top: 45%;
    width: 50px;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export function Loader() {
    return <Spinner/>
}