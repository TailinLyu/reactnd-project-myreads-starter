import React, { Component } from "react"
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

export default class Book extends Component {

    static proptypes = {
        key: PropTypes.string.isRequired,
        handleMove: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }
    handleMove = (shelf) => {
        this.props.handleMove(this.props.book, shelf)
    }

	render() {
        const book = this.props.book;
        if(this.props.search){
            this.props.books.forEach(b => {
                if(b.id == book.id){
                    book.shelf = b.shelf
                }
            });
        }
        const defaultVal = (book.shelf === 'currentlyReading' || book.shelf === 'wantToRead' || book.shelf === 'read') ? book.shelf : "none"
		return (
			<div>
				<li key={book.id}>
					<div className="book">
						<div className="book-top">
							<div
								className="book-cover"
								style={{
									width: 128,
									height: 193,
									backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`,
								}}
							/>
							<div className="book-shelf-changer">
								<select value={defaultVal} onChange={(event) => this.handleMove(event.target.value)}>
									<option value="move" disabled>
										Move to...
									</option>
									<option value="currentlyReading" >Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.author}</div>
					</div>
				</li>
			</div>
		);
	}
}
