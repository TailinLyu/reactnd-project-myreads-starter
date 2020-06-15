import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import Search from "./components/Search";
import { Route } from "react-router-dom";

class BooksApp extends Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		books: [],
	};
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({
				books,
			});
		});
	}
	handleMove = (changedBook, shelf) => {
		BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
    });
	};
	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<MainPage books={this.state.books} handleMove={this.handleMove} />
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<Search handleMove={this.handleMove}/>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;
