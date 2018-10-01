import React from 'react';
import { SocialIcon, BaseLayout } from '../components';
import styled, { css, keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { name, emails, links } from '../config';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const ringSize = 580;

const transitionName = 'reduce';
const duration = 2500;
const IndexPage = ({ data }) => (
  <BaseLayout>
    <MainPage>
      <ReactCSSTransitionGroup
        transitionName={transitionName}
        transitionAppear={true}
        transitionAppearTimeout={duration}
        transitionEnter={false}
        transitionLeave={false}
      >
        <AnimationCircle />
      </ReactCSSTransitionGroup>
      <Container>
        <ProfileContainer>
          <AvatarContainer>
            <Img fluid={data.avatar.childImageSharp.fluid} />
          </AvatarContainer>
          <Name>{name}</Name>
          <IconsContainer>
            {links.map(link => (
              <SocialIcon
                social={link.platform}
                link={link.link}
                key={link.platform}
              />
            ))}
          </IconsContainer>
          <EmailsContainer>
            {emails.map(email => (
              <EmailLink target="_blank" href={`mailto:${email}`} key={email}>
                {email}
              </EmailLink>
            ))}
          </EmailsContainer>
        </ProfileContainer>
        <Ring red />
        <Ring green />
        <Ring blue />
        <Ring yellow />
      </Container>
    </MainPage>
  </BaseLayout>
);
IndexPage.propTypes = {
  data: PropTypes.object,
};
export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const redanim = keyframes`
  0%   {transform:  rotate(0deg)   scaleX(0.90) scaleY(1.00);}
  50%  {transform:  rotate(180deg) scaleX(0.90) scaleY(1.00);}
  100% {transform:  rotate(360deg) scaleX(0.90) scaleY(1.00);}
`;

const greenanim = keyframes`
  0%   {transform:  rotate(31deg)  scaleX(0.90) scaleY(1.00);}
  25%  {transform:  rotate(121deg) scaleX(1.00) scaleY(0.90);}
  50%  {transform:  rotate(211deg) scaleX(0.90) scaleY(1.00);}
  75%  {transform:  rotate(301deg) scaleX(1.00) scaleY(0.90);}
  100% {transform:  rotate(391deg) scaleX(0.90) scaleY(1.00);}
`;

const blueanim = keyframes`
    0%   {transform:  rotate(413deg) scaleX(0.90) scaleY(1.00);}
  50%  {transform:  rotate(233deg) scaleX(0.90) scaleY(1.00);}
  100% {transform:  rotate(53deg)  scaleX(0.90) scaleY(1.00);}
`;

const yellowanim = keyframes`
    0%   {transform:  rotate(472deg) scaleX(0.90) scaleY(1.00);}
  25%  {transform:  rotate(382deg) scaleX(1.00) scaleY(0.90);}
  50%  {transform:  rotate(292deg) scaleX(0.90) scaleY(1.00);}
  75%  {transform:  rotate(202deg) scaleX(1.00) scaleY(0.90);}
  100% {transform:  rotate(112deg) scaleX(0.90) scaleY(1.00);}
`;

const Ring = styled.div`
  width: ${ringSize}px;
  height: ${ringSize}px;
  border-radius: ${ringSize}px;
  position: absolute;
  mix-blend-mode: screen;
  background: transparent;
  top: -40px;
  transition: opacity 500ms ease-in;

  ${props =>
    props.red &&
    css`
      border: ${ringSize * 0.06}px solid #f44336;
      animation: ${redanim} linear 6s;
      animation-iteration-count: infinite;
    `};
  ${props =>
    props.green &&
    css`
      border: ${ringSize * 0.06}px solid #4caf50;
      animation: ${greenanim} linear 6s;
      animation-iteration-count: infinite;
    `};
  ${props =>
    props.blue &&
    css`
      border: ${ringSize * 0.06}px solid #00bcd4;
      animation: ${blueanim} linear 6s;
      animation-iteration-count: infinite;
    `};
  ${props =>
    props.yellow &&
    css`
      border: ${ringSize * 0.06}px solid #ffeb3b;
      animation: ${yellowanim} linear 6s;
      animation-iteration-count: infinite;
    `};
  @media screen and (max-width: 750px), (max-height: 750px) {
    width: ${ringSize - 100}px;
    height: ${ringSize - 100}px;
    border-radius: ${ringSize - 100}px;
    top: -40px;
  }
  @media screen and (max-width: 650px), (max-height: 650px) {
    width: ${ringSize - 130}px;
    height: ${ringSize - 130}px;
    border-radius: ${ringSize - 130}px;
    top: -30px;
  }
  @media screen and (max-width: 575px), (max-height: 575px) {
    width: ${ringSize - 180}px;
    height: ${ringSize - 180}px;
    border-radius: ${ringSize - 180}px;
    top: -30px;
  }
  @media screen and (max-width: 525px), (max-height: 525px) {
    width: ${ringSize - 230}px;
    height: ${ringSize - 230}px;
    border-radius: ${ringSize - 230}px;
    top: -30px;
  }
  @media screen and (max-width: 475px), (max-height: 475px) {
    display: none;
  }
`;
const EmailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const EmailLink = styled.a`
  color: ${props => props.theme.baseTextColor};
  padding: 5px 0;
  position: relative;
  text-decoration: none;
  text-align: center;
  font-size: 1.3rem;
  &::before {
    background: ${props => props.theme.mainColor};
    opacity: 0;
    bottom: 0;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    width: 0%;
    transition: all 500ms;
    transform: translateX(-50%);
  }
  &:hover {
    color: ${props => props.theme.baseTextColor};
    cursor: pointer;
    &::before {
      opacity: 1;
      width: 100%;
    }
  }
  &:visited {
    color: ${props => props.theme.baseTextColor};
  }
  @media only screen and (max-width: ${props => props.theme.smallScreen}) {
    font-size: 1rem;
  }
  @media screen and (max-width: 750px), (max-height: 750px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 525px), (max-height: 525px) {
    font-size: 1rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
  flex-wrap: wrap;
`;
const Name = styled.h1`
  font-size: 3.2rem;
  font-weight: 200;
  margin: 0;
  text-align: center;
  margin-top: 0;
  @media only screen and (max-width: ${props => props.theme.smallScreen}) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 750px), (max-height: 750px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 475px), (max-height: 475px) {
    font-size: 2rem;
  }
`;
const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #263238;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;
const Container = styled.div`
  border-radius: 50%;
  height: ${ringSize - 70}px;
  width: ${ringSize - 70}px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px), (max-height: 750px) {
    height: ${ringSize - 170}px;
    width: ${ringSize - 170}px;
  }
  @media screen and (max-width: 650px), (max-height: 650px) {
    height: ${ringSize - 200}px;
    width: ${ringSize - 200}px;
  }
  @media screen and (max-width: 575px), (max-height: 575px) {
    height: ${ringSize - 250}px;
    width: ${ringSize - 250}px;
  }
  @media screen and (max-width: 525px), (max-height: 525px) {
    height: ${ringSize - 300}px;
    width: ${ringSize - 300}px;
  }
  @media screen and (max-width: 475px) {
    height: 350px;
    width: 100vw;
    border-radius: 0;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    border-radius: 0;
    padding: 10px;
  }
  @media screen and (max-height: 400px) {
    width: 400px;
    height: 100vh;
    border-radius: 0;
    padding: 10px;
  }
`;
const AnimationCircle = styled.div`
  background-color: white;
  position: fixed;
  @media screen and (min-width: 475px) {
    &.${transitionName}-appear {
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 170vh;
      height: 170vh;
      z-index: 1000;
      opacity: 1;
    }

    &.${transitionName}-appear.${transitionName}-appear-active {
      height: ${ringSize - 70}px;
      width: ${ringSize - 70}px;
      transition: all ${duration}ms cubic-bezier(0.42, 0, 0.58, 1);
      z-index: -1;
      opacity: 0;
    }
  }
  @media screen and (max-width: 475px), (max-height: 475px) {
    &.${transitionName}-appear {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100vh;
      height: 100vh;
    }

    &.${transitionName}-appear.${transitionName}-appear-active {
      height: 350px;
      transition: all ${duration}ms cubic-bezier(0.42, 0, 0.58, 1);
    }
  }
`;

const AvatarContainer = styled.div`
  height: 200px;
  width: 200px;
  @media screen and (max-width: 750px), (max-height: 750px) {
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 575px), (max-height: 575px) {
    height: 100px;
    width: 100px;
  }
`;

export default IndexPage;
