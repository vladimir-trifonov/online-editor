import React, { Component } from 'react'
import { connect } from 'react-redux'

import { textChanged } from '../actions/editor'

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
  constructor (props) {
    super()

    this.state = {
      editor: props.editor
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.textChangedActionCreator(event.target.value)
  }

  render () {
    return (
      <div style={styles.root}>
        <textarea style={styles.editor} value={this.state.editor.text} onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (editor) => {
  return {
    editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    textChangedActionCreator: (text) => textChanged(dispatch, text)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnlineEditor)
