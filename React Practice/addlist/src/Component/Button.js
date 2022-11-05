// import React from 'react'
// import styled from 'styled-components';
import styled from 'styled-components';



const Button = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 2px solid white;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    width: 50%;
    background: ${props=>props.valid ? "red":"dodgerblue"};
    color: #fff;
    border: #fff;
    
    &:hover{
        background: linear-gradient(45deg, greenyellow, dodgerblue);

    }
    @media(max-width:700px){
        &{
            width:auto;
        }
    }


    

`
export default Button