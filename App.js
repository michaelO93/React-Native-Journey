import React from 'react';
import {
  ScrollView
} from 'react-native';
import styled from 'styled-components'
import Card from './Components/Card';
import { Ionicons } from '@expo/vector-icons';
import NotificationIcon from './Components/Icons'
import Logo from './Components/Logo';
import Course from './Components/Course'


//MAIN

export default function App() {
  return (
    <Container>
      <ScrollView style={{height:"100%"}}>
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")} />
          <Title>Welcome Back,</Title>
          <Name>Michael</Name>
          <NotificationIcon
            style={{ position: "absolute", right:20,top:5}}
          />
        </TitleBar>
        <ScrollView style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }}
          horizontal={true} showsHorizontalScrollIndicator={false}>
          {logos.map((logo,index) => (
            <Logo key={index} image={logo.image} text={logo.text} />
          ))}
        </ScrollView>
        <Subtitle>Continue Learning</Subtitle>
        <ScrollView
          horizontal={true}
          style={{ paddingBottom: 30 }}
          showsHorizontalScrollIndicator={false}
        >
          {
            cards.map((card,index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))
          }
           <Card
            title="Styled Components 2"
            image={require("./assets/background1.jpg")}
            caption="React Native"
            logo={require("./assets/logo-react.png")}
            subtitle="5 of 12 Sections"
          />
        </ScrollView>
        <Subtitle>Popular Courses</Subtitle>
        {courses.map((course, index) => (
          <Course
            key={index}
            image={course.image}
            title={course.title}
            subtitle={course.subtitle}
            author={course.author}
            avatar={course.avatar}
            caption={course.caption}
          
          />
        ))}
      </ScrollView>
    </Container>
 );
}


const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma 1"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma 2"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma 3"
  },
]

const cards = [
  {
    title:"Styled Components 2",
    image:require("./assets/background1.jpg"),
    caption:"React Native",
    logo: require("./assets/logo-react.png"),
    subtitle:"5 of 12 Sections"
  },
  {
    title:"Styled Components 3",
    image:require("./assets/background2.jpg"),
    caption:"Figma",
    logo: require("./assets/logo-figma.png"),
    subtitle:"7 of 12 Sections"
  },
  {
    title:"Styled Components 4",
    image:require("./assets/background11.jpg"),
    caption:"React Studio",
    logo: require("./assets/logo-studio.png"),
    subtitle:"10 of 12 Sections"
  }
]

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  }
]










// STYLES

const Container = styled.View `
  flex:1;
  background-color: #f0f3f5;
  `;

const Avatar = styled.Image `
  position: absolute;
  top:0;
  left:0;
  width: 44px;
  height:44px;
  background:black;
  border-radius:22px;
  margin-left:20px;
  `;

const Subtitle = styled.Text `
  color:#b8bece;
  text-transform:uppercase;
  margin-left:20px;
  margin-top:50px;
  font-size:15px;
  font-weight:600;
  `

const TitleBar = styled.View `
    width:100%;
    padding-left:80px;
    margin-top:50px;
  `

const Title = styled.Text`
  color:#b8bece;
  font-weight:500;
  font-size:16px;
`
const Name = styled.Text`
  font-size:20px;
  font-weight:bold;
  color: #3c4560;

`