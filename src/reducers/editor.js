import { EDITOR_CHANGED } from '../actions/editor'

const editor = (state = null, action) => {
  switch (action.type) {
    case EDITOR_CHANGED:
      return JSON.parse(action.editor)
    default:
      return state
  }
}

export default editor
