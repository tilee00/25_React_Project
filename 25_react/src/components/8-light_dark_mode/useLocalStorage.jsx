import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            // JSON.parse() converts a JSON-formatted string into a JavaScript object.
            // localStorage.getItem() get the value of the specified local storage item, in this case the item named key
            // The String() method converts a value to a string.
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }
        return currentValue;
    });

    useEffect(() => {
        // JSON.stringify() converts JavaScript values (objects, arrays, etc.) into a JSON-formatted string.
        // Useful for storing in places like localStorage, where only strings can be saved
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}