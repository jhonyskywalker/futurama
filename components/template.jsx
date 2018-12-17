import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Head from './head'
import Header from './header'
import Container from './container'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: #000;
  }

  @font-face {
    font-family: 'Roboto';
    font-display: auto;
    src: local('Roboto'), url(https://fonts.googleapis.com/css?family=Roboto:400,500) format('woff2');
  }
`

const Template = ({ children, headOptions }) => (
  <>
    <GlobalStyle />
    <Head {...headOptions} />

    <Container>
      <Header {...headOptions} />
      {children}
    </Container>
  </>
)

export default Template
