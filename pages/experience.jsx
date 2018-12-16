import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Experience',
  description: 'This is my experience enjoy'
}

const Experience = () => (
  <Template headOptions={headOptions}>
    <section>
      <dl>
        <dt>
          <time>2018</time>
        </dt>
        <dd>
          <h3>XP Investimentos</h3>
          <h4>Front-End Developer</h4>
        </dd>
        <dt>
          <time>2017</time>
        </dt>
        <dd>
          <h3>Tuneduc</h3>
          <h4>Front-End Coordinator</h4>
        </dd>
      </dl>
    </section>
  </Template>
)

export default Experience
