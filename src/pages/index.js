import React from 'react'
import { SocialIcon } from '../components'
import styled from 'styled-components'
// import avatar from '../avatar.png'
import { name, email, links } from '../config'

const IndexPage = () => (
  <MainPage>
    <Container>
      <ImageGianluca
        src="https://abitcompany-cdn.sirv.com/personal/avatar.png"
        alt={name}
      />
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
      <EmailLink target="_blank" href={`mailto:${email}`}>
        {email}
      </EmailLink>
    </Container>
  </MainPage>
)

const EmailLink = styled.a`
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: none;
  color: #000629;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
`
const Name = styled.h1`
  font-size: 3.2rem;
  font-weight: 200;
  margin: 0;
  @media only screen and (max-width: ${props => props.theme.smallScreen}) {
    font-size: 2.2rem;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageGianluca = styled.img`
  height: 200px;
  width: 200px;
`
const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export default IndexPage
