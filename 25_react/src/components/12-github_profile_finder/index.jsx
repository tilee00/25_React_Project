import { useState, useEffect } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState("tilee00");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName('');
        }

        console.log(data);
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading data! Please wait</h1>
    }

    return (
        <div className="github_profile_container">
            <div className="input_wrapper">
                <input name="search_by_username" type="text"
                    placeholder="Search GitHub Username..." value={userName}
                    onChange={(event) => setUserName(event.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={ userData }/>: null
            }
        </div>
    )
}