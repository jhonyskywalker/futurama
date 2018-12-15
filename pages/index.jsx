import React from 'react'
import styled from 'styled-components'

import Template from '../components/template'

const headOptions = {
  title: 'Home'
}

const Home = () => (
  <Template headOptions={headOptions}>
    <section>
      <p>
        I work helping to organize the information of the internet, contributing
        with the visual side, utilizing the main language <b>"Hypertext"</b>,
        thank you <a>Vannevar Bush</a>
      </p>
      <p>
        Follow me on social media <b>@jhonyskywalker</b>
      </p>
    </section>
  </Template>
)

export default Home
