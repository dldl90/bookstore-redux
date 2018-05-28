import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class BookDetail extends PureComponent {
  render() {
    if (!this.props.book) return <div>Select a book to get started.</div>

    const { title } = this.props.book

    return (
      <div>
        <h3>Details for:</h3>
        <p>{title}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect (mapStateToProps)(BookDetail)