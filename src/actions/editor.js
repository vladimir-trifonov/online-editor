/* global fetch */
export const TEXT_CHANGED = 'TEXT_CHANGED'

const textChangedAction = text => ({
  type: TEXT_CHANGED,
  text
})

export function textChanged (dispatch, text) {
  return fetch(`http://localhost:3030/api/editor`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        text,
        action: TEXT_CHANGED
      }
    )
  })
    .then(response => response.json())
    .then(({ text }) => dispatch(textChangedAction(text)))
    .catch(error => console.error(error))
}
