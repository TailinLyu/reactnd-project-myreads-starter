import React, { Component } from "react"
import BookList from "./BookList"
import "../App.css"
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MainPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleMove: PropTypes.func.isRequired
      };
    
	render() {
		const readBooks = [];
		const readingBooks = [];
		const wantToReadBooks = [];
		const books = this.props.books;
		books.forEach((book) => {
			if (book.shelf === "currentlyReading") {
				readingBooks.push(book);
			} else if (book.shelf === "wantToRead") {
				wantToReadBooks.push(book);
			} else {
				readBooks.push(book);
			}
		});
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<BookList
						books={readingBooks}
						shelf="Currently Reading"
						handleMove={this.props.handleMove}
					/>
					<BookList
						books={wantToReadBooks}
						shelf="Want to Read"
						handleMove={this.props.handleMove}
					/>
					<BookList
						books={readBooks}
						shelf="Read"
						handleMove={this.props.handleMove}
					/>
				</div>
				<div className="open-search">
					<Link to="/search">
						<button>Search Books</button>
					</Link>
				</div>
			</div>
		);
	}
}
