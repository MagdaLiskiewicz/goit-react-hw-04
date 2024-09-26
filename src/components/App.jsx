import "./App.css";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import { useGetImages } from "../Hooks/useGetImages";
import ImageGallery from "./ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn";
import { useState } from "react";
import ImageModal from "./ImageModal";

function App() {
  const { isLoading, error, imagesList, getImages, handleLoadMore } =
    useGetImages();

  const handleSearch = (query) => {
    getImages(query);
  };

  // const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // const openModal = (image) => {
  //   setSelectedImage(image);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  //   setSelectedImage(null);
  // };

  // const handleLoadMore = () => {
  //   getImages(searchQuery, page + 1);
  // };
  // // if (isLoading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <ErrorMessage message={error.messages} />;
  // }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {isLoading && <Loader />}

      {imagesList.length > 0 && (
        <ImageGallery images={imagesList} onImageClick={handleImageClick} />
      )}

      {imagesList.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
