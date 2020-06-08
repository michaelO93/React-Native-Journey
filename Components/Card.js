import React from 'react';

import styled from 'styled-components'

const Card = props => (

    <Container>
        <Cover>
            <Image source={props.image} />
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Logo source={props.logo} />
            <Wrapper>
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>


);

export default Card;

const Content = styled.View`
    flex-direction:row;
    padding-left:20px;
    align-items:center;
    height:80px;
`;

const Logo = styled.Image`
    width:44px;
    height:44px;
`;

const Wrapper = styled.View`
    margin-left:10px;
`;

const Caption = styled.Text`
    font-size:20px;
    font-weight:600;
    color: #3c4560;
`;

const Subtitle = styled.Text`
    margin-top:4px;
    text-transform:uppercase;
    font-size:15px;
    font-weight:600;
    color: #b8bece;
`;


const Container = styled.View`
    background:white;
    border-radius:14px;
    width:315px;
    height:280px;
    margin-left:20px;
    margin-top:20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

const Cover = styled.View`

width:100%;
height:200px;
border-top-left-radius:14px;
border-top-right-radius:14px;
overflow:hidden;

`;

const Image = styled.Image`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

`;

const Title = styled.Text`
color:white;
width:170px;
margin-left:20px;
margin-top:20px;
font-size:24px;
font-weight:bold;
`;