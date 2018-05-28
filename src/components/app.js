import React, { PureComponent } from 'react'

import BookList from '../containers/book-list'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BookList />
      </div>
    )
  }
}
