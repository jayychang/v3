import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Particles from 'components/particles'
import ScrollingIntroduction from 'components/scrollingIntroduction'

const Container = styled(({ preventScroll, ...props }) =>
  <header {...props} />
)`
  height: 90vh;
  overflow: auto;
  ${ props => props.preventScroll && 'pointer-events: none;' }

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Header = props => {
  const { isScrolledTop } = props

  return (
    <Container preventScroll={ !isScrolledTop }>
      <Particles />
      <ScrollingIntroduction />
    </Container>
  )
}

export default connect(
  state => ({
    isScrolledTop: state.isScrolledTop
  })
)(Header)
