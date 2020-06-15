import React, {Component} from 'react'
import Book from './Book'
import '../App.css'
import PropTypes from 'prop-types'

export default class BookList extends Component {
    
    static proptypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        handleMove: PropTypes.func.isRequired
    }
    render() {
        const books = this.props.books

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelf}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) => (
                                <Book book={book} key={book.id} handleMove={this.props.handleMove}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}