import Modal from "react-modal";
import PropTypes from "prop-types";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.imageBox}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />

        <p className={css.imageInfo}>Author: {image.user.name}</p>
      </div>
    </Modal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};
