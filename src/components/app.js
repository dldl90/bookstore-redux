import React, { PureComponent } from 'react'

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}
