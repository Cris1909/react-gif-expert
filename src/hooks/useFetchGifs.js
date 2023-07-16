import { useEffect, useState } from 'react';

import { getGifs } from '../helpers';

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setIsLoading(false);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading };
};

export default useFetchGifs;
