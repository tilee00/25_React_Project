import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [active, setIsRatingActive] = useState(true);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return <div className="star-rating">
        <div>
            {
                // Spread operator ... is used to ensure that the array is iterable
                // The spread operator (`...`) is used to expand an iterable (like an array) into individual elements.
                // When you use `[...Array(noOfStars)]`, it converts the uninitialized array into an array of `undefined` values.

                // underscore `_` is a convention to indicate that the variable is not going to be used in the code.
                // map() method accepts three arguments: currentValueOftheLoopItem, index, and array.
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;

                    // the return statement is used to return star icon to every index of the array
                    return <FaStar
                        // key is a special string attribute you need to include when creating lists of elements in React
                        // key is a unique identifier for each element in the list
                        key={index}
                        // if index is less than or equal to rating or hover, then it will be active otherwise inactive
                        className={active ? (index <= (hover || rating) ? "active" : "inactive") : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => { handleMouseEnter(index); setIsRatingActive(true); }}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }
            <div>
                <p className="rating-text">Rating: {rating} out of {noOfStars}</p>
                <button onClick={() => { setIsRatingActive(false); setRating(0); }} >
                    Clear Rating
                </button>
            </div>
        </div>
    </div >
}