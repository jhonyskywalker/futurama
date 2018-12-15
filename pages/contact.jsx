import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Contact'
}

const Contact = () => (
  <Template headOptions={headOptions}>
    <section>
      <h1>
        <span>Jhonatan</span>
        <span>Silva</span>
      </h1>
      <h2>Did you liked about me, tell me more about you?</h2>

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
