import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

const headOptions = {
  title: 'Jhonatan Silva - Resume',
  description:
    'I am a Software Engineer and Indie Game Developer Padawan, based in São Paulo, Brazil.'
}

const Paragraph = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
  max-width: 620px;

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
    max-width: 100%;
  `)}
`

const Link = styled.a`
  color: ${props => props.color};
  font-weight: 400;
  text-decoration: underline;
`

const Home = () => (
  <Template headOptions={headOptions}>
    <section>
      <Paragraph>
        I currently use to React and NodeJS.
      </Paragraph>
      <Paragraph>
        I work helping to organize the information of the internet, contributing
        with the visual side, utilizing the main language <b>"Hypertext"</b>,
        thank you{' '}
        <Link
          target="_blank"
          rel="noopener"
          href="https://en.wikipedia.org/wiki/Vannevar_Bush"
          title="Vannevar Bush"
          color={randomColor(0.3, 0.99).hexString()}
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
