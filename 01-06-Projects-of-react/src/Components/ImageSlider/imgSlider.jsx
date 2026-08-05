import { useEffect } from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageSlider({ url, page, limit }) {
      const [image, setImage] = useState([])
      const [currentImage, setCurrentImage] = useState(0)
      const [loading, setLoading] = useState(false)
      const [errorMessage, setErrorMessage] = useState(null)


      async function fetchImages(geturl, pagee=1, limitt=5) {
        try {
            setLoading(true)
            const response = await fetch(`${geturl}?page=${pagee}&limit=${limitt}`)
            const data = await response.json()
            setImage(data)
            setLoading(false)


        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)

        }
      }


      useEffect(() => {
        if(url != '') fetchImages(url, page, limit)

      }, [url])


      if(loading) {
    return <div className="text-center mt-10 text-gray-500">Loading, Please wait</div>
    }
    if(errorMessage !== null) {
        return <div className="text-center mt-10 text-red-500">Error: {errorMessage}</div>
    }

    return (
       <div className="relative w-full max-w-xl mx-auto mt-10">

    <div className="relative h-72 overflow-hidden rounded-xl">

        {image && image.length ? image.map((imageItem, index) => (
            <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt={imageItem.author}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            />
        )) : null}

        <FaArrowCircleLeft
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        onClick={() => currentImage == 0 ? setCurrentImage(image.length-1) : setCurrentImage(currentImage-1)}/>

        <FaArrowCircleRight
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        onClick={() => currentImage == image.length-1 ? setCurrentImage(0) : setCurrentImage(currentImage+1)}/>

        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {image && image.length ? image.map((_, index) => (
                <button key={index}
                className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/40'}`}
                onClick={() => setCurrentImage(index)}
                ></button>
            ))
            : null
            }
        </span>

    </div>

</div>
        );
}

export default ImageSlider;