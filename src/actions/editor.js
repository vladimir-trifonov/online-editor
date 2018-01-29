/* global fetch */
export const EDITOR_CHANGED = 'EDITOR_CHANGED'

const editorChangedAction = editor => ({
  type: EDITOR_CHANGED,
  editor
})

export function editorChanged (dispatch, editor) {
  return fetch(`http://localhost:3030/api/editor`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        editor,
        action: EDITOR_CHANGED
      }
    )
  })
    .then(response => response.json())
    .then(({ editor }) => dispatch(editorChangedAction(editor)))
    .catch(error => console.error(error))
}
