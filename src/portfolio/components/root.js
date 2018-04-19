import React from 'react'
import { connect } from 'react-redux'

import { Header, Main, Footer } from 'layouts'
import { setScrolledTop } from 'Redux/actions/scrolledTop'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { isScrolledTop, setScrolledTop } = this.props

    const scrolledTop = window.pageYOffset <= 0
    setScrolledTop(scrolledTop)
  }

  render() {
    return (
      [
        <Header key='header' />,
        <Main key='main' />,
        <Footer key='footer' />,
      ]
    )
  }
}

export default connect(
  state => ({
    isScrolledTop: state.isScrolledTop
  }),
  {
    setScrolledTop: setScrolledTop
  }
)(Root)
