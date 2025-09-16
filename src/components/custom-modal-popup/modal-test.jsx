import React from "react";
import Modal from "./Modal.jsx";

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = React.useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    };

    return (<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 min-w-screen">
            <button
                onClick={handleToggleModalPopup}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
                Open Modal Popup
            </button>

            {showModalPopup && (<Modal
                    header="Custom Header"
                    body={<div>Custom body content 🎉</div>}
                    footer={<button
                        onClick={handleToggleModalPopup}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Close
                    </button>}
                    onClose={handleToggleModalPopup}
                />)}
        </div>);
};

export default ModalTest;
