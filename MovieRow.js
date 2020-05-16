import React, { Component } from "react";

export class MovieRow extends Component {
  render() {
    return (
      <div key={this.props.movie.id}>
        <table style={{ backgroundColor: "#f4f4f4" }}>
          <tr>
            <td>
              <img src={this.props.movie.poster_src} alt="poster" />
            </td>
            <td style={{ fontFamily: "Comic Sans MS, Cursive, sans-serif" }}>
              <h2 style={{ fontWeight: "bold" }}>{this.props.movie.title}</h2>
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MovieRow;
