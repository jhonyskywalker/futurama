import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Head from './head'
import Header from './header'

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
`

const Template = ({ children, headOptions }) => (
  <>
    <GlobalStyle />
    <Head {...headOptions} />

    <Header />

    {children}
  </>
)

export default Template
