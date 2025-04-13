import QRCode from 'react-qr-code';
import { useState } from 'react';

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        // set the qrCode state to the input value
        // state is a special variable in React that allows you to store and manage data in your component
        setQrCode(input);
        setInput(""); // clear the input field after generating the QR code
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <input
                // onChange is a React event handler that is triggered when the value of the input changes
                // event parameter contains the current value of the input field
                // event.target refers to the input element itself
                // event.target.value is the current value of the input field
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text" name="qr_code" placeholder="Enter your value here"
            />
            <button
                // input.trim() is a method that removes whitespace from both ends of a string
                // if input and input.trim() is not empty, then disabled is false
                disabled={input && input.trim() !== "" ? false : true}
                onClick={handleGenerateQrCode}
            >
                Generate
            </button>
            <div>
                <QRCode id="qr_code_value" value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div>
    );
}