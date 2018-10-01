import React from 'react'
import Helmet from 'react-helmet'

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
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
    <meta property="og:image" content="https://gianlucachiap.me/avatar.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Karla"
      rel="stylesheet"
    />
  </Helmet>
)

export default Head
