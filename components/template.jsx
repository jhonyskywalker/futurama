import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { percentage } from '../utils'

import DocumentHead from './documentHead'
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
    font-family: sans-serif;
    color: #fff;
    background-color: #333;
  }
`

const Container = styled.section`
  padding: 40px ${percentage(16, 720)};
  max-width: 720px;
  margin: 0 auto;
  width: 100%;

  h2 {
    margin-bottom: 40px;
  }
`

const Template = ({ children, headOptions }) => (
  <>
    <GlobalStyle />
    <DocumentHead {...headOptions} />

    <Container>
      <Header {...headOptions} />
      {children}
    </Container>
  </>
)

export default Template
