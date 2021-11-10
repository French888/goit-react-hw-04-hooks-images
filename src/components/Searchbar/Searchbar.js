import { useState } from "react";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.error("Enter your query!");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="query"
            value={query}
            onChange={handleQueryChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state.query);

//     this.setState({ query: '' });
//   };

//   handleChange = event => {
//     this.setState({ query: event.currentTarget.value });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   query: PropTypes.string,
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
