import MenuList from "./menu_list"
import "./styles.css"

export default function TreeView({ menus = [] }) {

    return <div className="tree_view_container">
        <MenuList list={menus} />
    </div>
}