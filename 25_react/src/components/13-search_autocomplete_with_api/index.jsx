import { useState, useEffect } from "react";
import Suggestions from "./suggestions";


export default function SearchAutoComplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            // The filter method iterates over each item in the users array.
            // Checks if the query exists as a substring within the item. 
            // If the query exists, indexOf returns the index of the substring 
            // If the query does not exist, indexOf returns -1.
            const filteredData = users && users.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    function handleClick(event) {
        setShowDropDown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    // automatically fetch the list of users when the component is first rendered. 
    // It ensures that the data-fetching logic is executed as a side effect and only once, thanks to the empty dependency array `[]`
    useEffect(() => {
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);

    return (
        <div className="search_autocomplete_container">
            {
                loading
                    ? <h1>Loading Data! Please wait</h1>
                    : <input value={searchParam} name="search_users" placeholder="Search Users here..." onChange={handleChange} />
            }
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}