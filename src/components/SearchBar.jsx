import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import { useState } from "react";
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => setQuery(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value;
    // getImages(query.value);

    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setQuery("");

    form.reset();
  };

  return (
    <header>
      {/* {query} */}
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className={css.btnSearch}>
            <FcSearch size={30} className={css.icon} />
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
