import MenuList from "./menu_list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {

    // useState default value is an empty object
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentlabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel]
        });
    }

    console.log(displayCurrentChildren);

    return <li>
        <div className="menu_item">
            <p>{item.label}</p>
            {item && item.children && item.children.length > 0 ?
                <span onClick={() => handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ?
                            <FaMinus color="#fff" size={20} />
                            : <FaPlus color="#fff" size={20} />
                    }
                </span>
                : null}
        </div>

        {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
            <MenuList list={item.children} />
            : null}
    </li>
}