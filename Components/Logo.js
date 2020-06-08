import React from 'react';
import styled from 'styled-components';

export default function Logo (props) {
    return (
        <Container>
            <LogoWrapper>
                <Image source={props.image} resizeMode="contain"/>
                <Text>{props.text}</Text>
            </LogoWrapper>
       </Container>
    )
}

//STYLES

const Container = styled.View`
    flex-direction: row;
    align-items:center;
    margin:0 8px;
    background:white;
    box-shadow: 0 5px 10px rgba(0,0,0,0.05);
    border-radius:10px;
    height:60px;
    padding:12px 16px 12px;
    
`

const LogoWrapper = styled.View`
    flex-direction:row;
    padding:20px 12px;
`


const Image = styled.Image`
    height:36px;
    width:36px;
`

const Text = styled.Text`
    margin-left:8px;
    font-size:17px;
    font-weight:600;
`