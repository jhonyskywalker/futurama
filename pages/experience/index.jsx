import React from 'react'
import styled from 'styled-components'
import randomColor from 'random-color'

import Template from '../../components/template'

import experiences from '../../settings/experience'

const headOptions = {
  title: 'Experience',
  description: 'This is my experience enjoy'
}

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 80px;
    background-color: ${props => props.color};
    margin: 0 40px;
  }
`

const ListDescription = styled.div`
  padding: 16px 24px;
  border-radius: 4px;
  background-color: ${props => props.color};
  width: 480px;
  height: 220px;
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
`

const JobPosition = styled(TitleStyled)`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 8px;
`

const JobLocation = styled(TitleStyled)`
  font-size: 16px;
  font-weight: 300;
`

const JobPeriod = styled.time`
  font-size: 24px;
  color: ${props => props.color};
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
              <JobPeriod color={randomColor(0.3, 0.99).hexString()}>
                {experience.employmentDuration.enter}
              </JobPeriod>
              <TimeSpace color={randomColor(0.3, 0.99).hexString()}>
                #
              </TimeSpace>
              <JobPeriod color={randomColor(0.3, 0.99).hexString()}>
                {experience.employmentDuration.exit}
              </JobPeriod>
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
