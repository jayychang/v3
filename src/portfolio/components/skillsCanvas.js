import React from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  height: 300px;
  width: 600px;
  background: #AAAAAA;
`

const testArray = ['https://github.com/jayychang/portfolio-v2/blob/master/source/public/assets/icons/reactjs-icon.png?raw=true',
                   'https://github.com/jayychang/portfolio-v2/blob/master/source/public/assets/icons/reactivex-icon.png?raw=true']

const DEFAULT_Z_INDEX = 10000
const ALPHA_CHANGE = 0.05

export default class SkillsCanvas extends React.PureComponent {
  canvas
  ctx

  constructor(props) {
    super(props)
    this.state = { iconArray: [] }
    /**
     *  {
     *    src,
     *    x,
     *    y,
     *    z,
     *    alpha,
     *    countdown,
     *  }
     */
  }

  componentDidMount() {
    this.getIcons()
    requestAnimationFrame(this.animateIcons);
  }

  setCanvasRef = ref => {
    this.canvas = ref
    this.ctx = ref.getContext('2d')
    ref.getContext('2d').globalCompositeOperation = 'source-over'
  }

  getIcons = () => {
    testArray.forEach(thing => {
      const icon = new Image()
      icon.src = thing
      icon.onload = () => {
        var { iconArray } = this.state
        iconArray.push({
          icon: icon,
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          alpha: 0,
          delta: ALPHA_CHANGE,
          z: DEFAULT_Z_INDEX,
          countdown: 200,
        })
        this.setState({ iconArray })
      }
    })
  }

  animateIcons = () => {
    // const { iconArray } = this.state
    var newIconArray = []

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.sortArrayByZ().forEach(icon => {
      if (icon.countdown > 0) {
        icon.countdown--
        icon.z--
      } else if (icon.countdown <= 0 && 0 <= icon.alpha && icon.alpha <= 1) {
        icon.z--
        icon.alpha = icon.alpha + icon.delta
      } else {
        icon.alpha = Math.min(Math.max(icon.alpha, 0), 1)
        icon.delta = -icon.delta
        icon.z = DEFAULT_Z_INDEX

        if (icon.alpha == 0) {
          icon.x = Math.random() * this.canvas.width
          icon.y = Math.random() * this.canvas.height
          icon.countdown = 100
        } else {
          icon.countdown = Math.random() * 700
        }
      }
      this.ctx.save()
      this.ctx.globalAlpha = Math.min(Math.max(icon.alpha, 0), 1)
      this.ctx.drawImage(icon.icon, 0, 0);
      this.ctx.restore()
      newIconArray.push(icon)
    })

    requestAnimationFrame(this.animateIcons)
  }

  sortArrayByZ = () => {
    const { iconArray } = this.state

    return iconArray.sort(function(a, b){
      return a.z > b.z;
    });
  }

  render() {
    const { setCanvasRef } = this

    return (
      <Canvas innerRef={ setCanvasRef } />
    )
  }
}
