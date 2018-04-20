import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  top: 0;
  pointer-events: none;
`

export default class _Particles extends React.PureComponent {
  render () {
    return (
      <Container>
        <Particles params={particlesParams} style={ particlesStyle } />
      </Container>
    )
  }
}

const particlesStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
}
const particlesParams = {
  'particles': {
    'number': {
      'value': 70,
    },
    'color': {
      'value': '#6152d7'
    },
    'shape': {
      'type': 'star',
      'polygon': {
        'nb_sides': 5
      },
    },
    'opacity': {
      'value': 0.5,
      'random': false,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 4.5,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 40,
        'size_min': 0.1,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false,
      // 'distance': 150,
      // 'color': '#ffffff',
      // 'opacity': 0.4,
      // 'width': 1
    },
    'move': {
      'enable': true,
      'speed': 1.60340724038582,
      'direction': 'none',
      'random': true,
      'straight': false,
      'out_mode': 'bounce',
      'bounce': true,
      'attract': {
        'enable': false
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false,
        // 'mode': 'repulse'
      },
      'onclick': {
        'enable': false,
        // 'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 400,
        'size': 40,
        'duration': 2,
        'opacity': 1,
        'speed': 3
      },
      'repulse': {
        'distance': 138.05354650425073,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
}
