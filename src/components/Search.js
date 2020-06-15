import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from './Book'
import PropTypes from 'prop-types'
export default class Search extends Component {
	state = {
        query: "",
        showingBooks: []
    };
    
    static proptypes = {
        handleMove : PropTypes.func.isRequired
    }

    handleQuery = (query) => {
        BooksAPI.search(query).then((books) => {
            this.setState({
                query: query,
                showingBooks: books
            })
		})
    }
	render() {
		const showingBooks  = this.state.showingBooks;
		return (
			<div>
				<div className="search-books">
					<div className="search-books-bar">
						<Link to="/">
							<button className="close-search">Close</button>
						</Link>
						<div className="search-books-input-wrapper">
							{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
							<input type="text" placeholder="Search by title or author" onChange={(event) => this.handleQuery(event.target.value)} />
						</div>
                    </div>
					<div className="search-books-results">
                        <ol className="books-grid" >
                            {Array.isArray(showingBooks) && showingBooks.map((book) => (
                                <Book books={this.props.books} book={book} key={book.id} handleMove={this.props.handleMove} search={true} />
                            ))}
                        </ol>
					</div>
				</div>
			</div>
		);
	}
}
