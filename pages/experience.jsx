import React from 'react'
import styled, { css } from 'styled-components'
import randomColor from 'random-color'
import { breakpoint } from '../utils'

import Template from '../components/template'

import experiences from '../settings/experience'

const headOptions = {
  title: 'Jhonatan Silva - Experience',
  description: 'This is my experience enjoy'
}

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${breakpoint('for-phone-only', css`
    flex-direction: column;
  `)}
`

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  ${breakpoint('for-phone-only', css`
    width: 100%;
    flex-direction: column;
  `)}

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 80px;
    background-color: ${props => props.color};
    margin: 0 40px;

    ${breakpoint('for-phone-only', css`
      margin: 16px 0;
    `)}
  }
`

const ListDescription = styled.div`
  padding: 16px 24px;
  border-radius: 4px;
  background-color: ${props => props.color};
  width: 480px;

  ${breakpoint('for-phone-only', css`
    width: 100%;
  `)}
`

const TitleStyled = styled.h1`
  color: #000;
`

const Background = styled.span`
  background-color: ${props => props.color};
  padding: 8px 16px;
  display: inline-block;
`

const JobTitle = styled(TitleStyled)`
  font-size: 32px;
  margin-bottom: 16px;

  ${breakpoint('for-phone-only', css`
    font-size: 24px;
  `)}
`

const JobPosition = styled(TitleStyled)`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 8px;

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
  `)}
`

const JobLocation = styled(TitleStyled)`
  font-size: 16px;
  font-weight: 300;

  ${breakpoint('for-phone-only', css`
    font-size: 12px;
  `)}
`

const JobPeriod = styled.time`
  font-size: 24px;
  color: ${props => props.color};

  ${breakpoint('for-phone-only', css`
    font-size: 16px;
  `)}
`

const TimeSpace = styled.span`
  color: ${props => props.color};
  font-size: 16px;
  margin: 0 8px;
`

const Experience = () => (
  <Template headOptions={headOptions}>
    <section>
      <List>
        {experiences.map(experience => (
          <ListItem key={experience.employmentDuration.enter}>
            <ListTitle color={randomColor(0.3, 0.99).hexString()}>
              <section>
                <JobPeriod color={randomColor(0.3, 0.99).hexString()}>
                  {experience.employmentDuration.enter}
                </JobPeriod>
                <TimeSpace color={randomColor(0.3, 0.99).hexString()}>
                  #
                </TimeSpace>
                <JobPeriod color={randomColor(0.3, 0.99).hexString()}>
                  {experience.employmentDuration.exit}
                </JobPeriod>
              </section>
            </ListTitle>
            <ListDescription color={randomColor(0.3, 0.99).hexString()}>
              <JobTitle as="h3">
                <Background color={randomColor(0.3, 0.99).hexString()}>
                  {experience.company.name}
                </Background>
              </JobTitle>
              <JobPosition as="h4">
                <Background color={randomColor(0.3, 0.99).hexString()}>
                  {experience.position}
                </Background>
              </JobPosition>
              <JobLocation as="address">
                <Background color={randomColor(0.3, 0.99).hexString()}>
                  {experience.location}
                </Background>
              </JobLocation>
            </ListDescription>
          </ListItem>
        ))}
      </List>
    </section>
  </Template>
)

export default Experience
