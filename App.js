import React from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  performSearch = async (searchTerm) => {
    const url =
      "http://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +
      searchTerm;
    await $.ajax({
      url: url,
      success: (searchResults) => {
        console.log(searchResults);
        const results = searchResults.results;
        var movieRows = [];
        results.forEach((movie) => {
          movie.poster_src =
            "http://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("failed data");
      },
    });
  };
  searchChangeHandler = () => {
    const searchTerm = document.getElementById("name").value;
    this.performSearch(searchTerm);
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>GSD</h1>
        </header>
        <input
          type="text"
          placeholder="movie name"
          id="name"
          onChange={this.searchChangeHandler}
        />
        <button>submit</button>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
