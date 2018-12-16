import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Home',
  description:
    'I am a Product Developer, Technology Consultant and Entrepeneur based in São Paulo'
}

const Paragraph = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  max-width: 620px;
`

const Link = styled.a`
  color: #53c1af;
  font-weight: 400;
  text-decoration: underline;
`

const Home = () => (
  <Template headOptions={headOptions}>
    <section>
      <Paragraph>
        I work helping to organize the information of the internet, contributing
        with the visual side, utilizing the main language <b>"Hypertext"</b>,
        thank you{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Vannevar_Bush"
          title="Vannevar Bush"
        >
          Vannevar Bush
        </Link>
      </Paragraph>
      <Paragraph>
        Follow me on social media <b>@jhonyskywalker</b>
      </Paragraph>
    </section>
  </Template>
)

export default Home
