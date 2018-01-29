import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editorChanged } from '../actions/editor'

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editor: {
    width: 600,
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10
  }
}

class OnlineEditor extends Component {
  constructor(props) {
    super()

    this.state = {
      editor: props.editor
    }

    this.traceEvent = this.traceEvent.bind(this)
    this.triggerKeyboardEvent = this.triggerKeyboardEvent.bind(this)
  }

  traceEvent(e) {
    if (e.key !== 'Unidentified') {
      e.preventDefault()
      this.props.editorChangedActionCreator(JSON.stringify({ key: e.key, char: e.char, keyCode: e.keyCode }))
    }
  }

  triggerKeyboardEvent(el, editor) {
    const eventObj = document.createEventObject ? document.createEventObject() : document.createEvent('Events')

    if (eventObj.initEvent) {
      eventObj.initEvent('keydown', true, true)
    }

    eventObj.keyCode = editor.keyCode
    eventObj.which = editor.keyCode
    eventObj.overwrite = true

    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent('onkeydown', eventObj)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.editor || !this.textarea) {
      return
    }

    this.triggerKeyboardEvent(this.textarea, nextProps.editor)
  }

  render() {
    return (
      <div style={styles.root}>
        <textarea ref={(textarea) => { this.textarea = textarea }} style={styles.editor} onKeyDown={this.traceEvent} />
      </div>
    )
  }
}

const mapStateToProps = ({ editor }) => {
  return {
    editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editorChangedActionCreator: (editor) => editorChanged(dispatch, editor)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnlineEditor)
