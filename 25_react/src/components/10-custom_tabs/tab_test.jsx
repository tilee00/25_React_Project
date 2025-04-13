import Tabs from "./tabs";
import "./tabs.css"

function RandomConponent() {
    return <div>Some random content</div>
}

export default function TabTest() {

    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is the content for Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>
                <img src="https://www.seguetech.com/wp-content/uploads/2013/10/segue-blog-what-is-URL-shortening-service-how-can-it-help-my-website.png" alt="tab2 content" />
            </div>
        },
        {
            label: "Tab 3",
            content: <RandomConponent />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}