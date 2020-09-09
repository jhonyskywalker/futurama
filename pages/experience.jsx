import React, { useState } from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

import Template from '../components/template'

import experiences from '../data/experience'

const headOptions = {
  title: 'Experience',
  description: `Today I'm here, and tomorrow?`
}

const ExperienceArticle = styled.article`
  margin: 0 0 40px 0;
  max-height: ${props => props.show ? `100px` : `100%`};
  overflow: ${props => props.show ? `hidden` : `auto`};
  position: relative;

  header {
    margin: 0 0 24px 0;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  h3,
  h4 {
    margin-bottom: 6px;
  }

  p,
  dl {
    margin-bottom: 24px;
  }

  dt,
  dd {
    margin: 8px 0;
  }

  dt {
    font-weight: bold;
  }

  p {
    line-height: 24px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px 16px;
    background-color: ${props => props.show ? `transparent` : props.color};
    border: 1px solid ${props => props.color};
    color: ${props => props.show ? props.color : `#000`};

    &:hover, &:active {
      background-color: ${props => props.color};
      border: 1px solid;
      color: #000
    }
  }
`;

const ExperienceItem = (props) => {
  const [hidden, setHidden] = useState(true)

  return (
    <ExperienceArticle key={props.data.index} show={hidden} color={randomColor(0.3, 0.99).hexString()}>
      <header>
        <h2 style={{ color: randomColor(0.3, 0.99).hexString() }}>
          {props.data.experience.position}
        </h2>
        <h3 style={{ color: randomColor(0.3, 0.99).hexString() }}>
          {props.data.experience.company.name}
        </h3>
        <h4 style={{ color: randomColor(0.3, 0.99).hexString() }}>
          {props.data.experience.employmentDuration.enter} - {props.data.experience.employmentDuration.exit}
        </h4>
      </header>

      <section>
        {props.data.experience.descriptions && props.data.experience.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}

        {props.data.experience.lists && props.data.experience.lists.map((list, index) => (
          <dl key={index}>
            <dt style={{ color: randomColor(0.3, 0.99).hexString() }}>{list.title}</dt>
            {list.items && list.items.map((item, index) => (
              <dd key={index}>{item}</dd>
            ))}
          </dl>
        ))}
      </section>

      <button onClick={() => setHidden(!hidden)}>{hidden ? `show more` : `show less`}</button>
    </ExperienceArticle>
  )
};

const Experience = () => (
  <Template headOptions={headOptions}>
    {experiences.map((experience, index) => (
      <ExperienceItem data={{ experience, index }} />
    ))}
  </Template>
)

export default Experience
