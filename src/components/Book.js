import React, { Component } from "react"
import PropTypes from 'prop-types'

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
								<select value={book.shelf} onChange={(event) => this.handleMove(event.target.value)}>
									<option value="move" disabled>
										Move to...
									</option>
									<option value="currentlyReading">Currently Reading</option>
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
