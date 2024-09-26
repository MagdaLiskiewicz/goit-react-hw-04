import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
