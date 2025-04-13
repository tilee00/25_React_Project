import MenuItem from "./menu_item"
import "./styles.css"  

export default function MenuList({ list = [] }) {

    return <ul className="menu_list_container">
        {
            // map() method iterates over the list and returns a new array of MenuItem components
            list && list.length ?
                list.map((listItem) => <MenuItem item={listItem} />)
                : null
        }
    </ul>
}