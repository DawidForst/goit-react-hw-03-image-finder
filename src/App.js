import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";

const API_KEY = "32129140-b7bda5ae96b59391b71a1c3d8";
const BASE_URL = "https://pixabay.com/api/";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    if (query !== "") {
      fetchImages();
    }
  }, [query, page]);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <Button onClick={handleLoadMoreClick} />
      )}
    </div>
  );
}
