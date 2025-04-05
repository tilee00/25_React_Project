import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

    // The React useState Hook allows us to track state in a function component
    // State generally refers to data or properties that need to be tracking in an application
    const [selected, setSelected] = useState(null);
    // The useState Hook default value is false means multi selection is disabled    
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    // The useState Hook default value is an empty array means no items are selected
    // The array will contain the ids of the selected items
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        // if current Id is equal to clicked Id then set selected to null else set selected to current Id
        // This is a common pattern in React for toggling the visibility of an element
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        // find the index of the current Id in the copyMultiple array
        // if the current Id is not found in the array, it will return -1
        // if the current Id is found in the array, it will return the index of the current Id
        // if the current Id is not found in the array, push the current Id to the array
        // if the current Id is found in the array, remove the current Id from the array
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        // array.splice(index, count, item1, ....., itemX); index is the position to start removing/adding items, count is the number of items to remove, item1, ....., itemX are the items to add to the array
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMultiple);
    }

    console.log(selected, multiple)

    return <div className="wrapper">
        <div className="accordianContainer">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="btnMultiSelect">
                Multi Selection
                <span>{enableMultiSelection ? " ON" : " OFF"}</span>
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem =>
                            <div className="item">
                                {/* when onclick, if enableMultiSelection is true then handleMultipleSelection get executed*/}
                                <div onClick={enableMultiSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)}
                                    className="title"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        // if enableMultiSelection is true then check if multiple array contains the current Id
                                        // if multiple array contains the current Id then expression on the right of && will be executed
                                        multiple.indexOf(dataItem.id) !== -1 && 
                                        (<div className="content">{dataItem.answer}</div>) 
                                        // if enableMultiSelection is false then check if selected Id is equal to current Id
                                        // if selected Id is equal to current Id then show the answer
                                        : selected === dataItem.id && 
                                        (<div className="content">{dataItem.answer}</div>)

                                }
                                {/* {
                                    // single selection
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null
                                } */}
                            </div>)
                        : <div>No data found!</div>
                }
            </div>
        </div>
    </div>
}