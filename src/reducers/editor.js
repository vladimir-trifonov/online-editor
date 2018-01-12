import { TEXT_CHANGED } from '../actions/editor'

const editor = (state = { text: '' }, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return Object.assign({}, ...state, { text: action.text })
    default:
      return state
  }
}

export default editor
