import ImageCard from "./ImageCard";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map((image) => (
          <li
            key={image.id}
            className={css.item}
            onClick={() => onImageClick(image)}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
