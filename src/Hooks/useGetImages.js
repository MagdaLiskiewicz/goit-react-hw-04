import { useState } from "react";
import { fetchImages } from "../api";

export const useGetImages = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const getImages = async (query, nextPage = 1) => {
    try {
      setIsLoading(true);

      if (query !== searchQuery) {
        setImagesList([]);
        setPage(1);
        setSearchQuery(query);
      }

      const images = await fetchImages(query, nextPage);

      if (nextPage === 1) {
        setImagesList(images);
      } else {
        setImagesList((prevImages) => [...prevImages, ...images]);
      }

      setPage(nextPage);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (searchQuery) {
      getImages(searchQuery, page + 1);
    }
  };

  return {
    isLoading,
    error,
    imagesList,
    getImages,
    handleLoadMore,
    page,
  };
};
