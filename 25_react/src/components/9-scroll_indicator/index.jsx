import { useEffect, useState } from "react"
import "./scroll.css"

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            // Sends a GET request to the URL stored in getUrl
            const response = await fetch(getUrl);
            // Parses the JSON response into a JavaScript object
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);

        const howMuchScorlled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage(Math.round((howMuchScorlled / height) * 100));
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)

        return () => {
            window.removeEventListener("scroll", () => {

            })
        }
    }, []);

    console.log(data, scrollPercentage);

    if (errorMessage) {
        return <div>Error! {errorMessage}</div>
    }

    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    return (
        <div className="container">
            <div className="top_container">
                <h1>Custom Scroll Indicator ({scrollPercentage}%) </h1>
                <div className="scroll_progress_tracking_container">
                    <div className="current_progress_bar" style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div className="data_container">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <p>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>)
}