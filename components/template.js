import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Head from './head'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial;
    color: #fff;
    background-color: #363546;
  }
`

const Template = ({ children, headOptions }) => (
  <>
    <GlobalStyle />
    <Head {...headOptions} />

    <Header />

    {children}
  </>
);

export default Template
