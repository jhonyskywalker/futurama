import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Contact',
  description: 'Did you liked about me, tell me more about you?'
}

const Contact = () => (
  <Template headOptions={headOptions}>
    <section>
      <ul>
        <li>
          <h5>Email</h5>
          <a>talkto@jhonatansilva.com</a>
        </li>
      </ul>
    </section>
  </Template>
)

export default Contact
