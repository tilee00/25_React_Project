import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    // the difference between async and sync is that async program does not wait for the previous program to finish before starting the next one
    // while sync program waits for the previous program to finish before starting the next one
    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            // await is used to wait for the promise to be resolved before moving on to the next line of code
            // promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            // response.json() is a method that parses the response body as JSON
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow left-arrow" />
        {
            images && images.length > 0 ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={currentSlide === index ? "current-image" : "current-image hidden"}
                    />
                ))
                : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow right-arrow" />
        <span className="circle-indicators">
            {
                images && images.length > 0 ?
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={currentSlide === index ? "current-indicator" : "current-indicator inactive"}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null
            }
        </span>
    </div>
}