import * as scrolledTopActions from 'Redux/actions/scrolledTop'

const DEFAULT = true

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case scrolledTopActions.SET_SCROLLED_TOP:
      return action.payload
    default:
      return state
  }
}
