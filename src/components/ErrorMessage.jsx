import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <p>{message || "Something went wrong!"}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
