import { useEffect, useState } from 'react';
import { getGifs } from '../fetch/GetImgFetch';

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        setimages(await getGifs( category ));
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [ ])

  return {
    images,
    isLoading
  }
}
