import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  main: '#3bd0d6',
  smallScreen: '400px',
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gianluca Chiap</title>
        <meta
          name="description"
          content="Gianluca chiap (@forgiangi) personal webpage"
        />
        <meta name="keywords" content="forgiangi,gianluca,chiap" />
        <meta property="og:url" content="https://gianlucachiap.me/" />
        <meta property="og:site_name" content="Gianluca Chiap" />
        <meta property="og:title" content="Gianluca Chiap" />
        <meta
          property="og:description"
          content="Gianluca chiap (@forgiangi) personal webpage"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gianlucachiap.me/avatar.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400"
          rel="stylesheet"
        />
      </Helmet>
      <div>{children()}</div>
    </div>
  </ThemeProvider>
)

injectGlobal`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: 1px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`

const Main = styled.div`
  min-height: 100vh;
`
export default Layout
