import { useState } from "react"
import Modal from "./modal";


export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal id={"custom_id"}
                header={<h1>Customized Header</h1>} onClose={onClose} body={<div>Customized body</div>}
            />
        }
    </div>
}