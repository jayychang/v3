import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 90vh;
  background: #f0f0f0;

  &::before {
    content: '';
    position:absolute;
    width: 100%;
    max-width: 1100px;
    left: 50%;
    transform: translate(-50%, -100%);
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 60px solid #f0f0f0;
    z-index: 6
  }
`

export default () => {
  return <Container />
}
