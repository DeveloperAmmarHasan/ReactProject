import React from "react";

const Modal = ({header, body, footer, id, onClose}) => {
    return (<div
            id={id || "modal"}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose} // click overlay closes modal
        >
            {/* Stop propagation to avoid closing when clicking inside */}
            <div
                className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div
                    className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {header ? header : "Header"}
                    </h2>
                    <button
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl leading-none"
                        aria-label="Close Modal"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {body ? body : <p className="text-sm">This is our modal body</p>}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    {footer ? footer : <h2 className="text-sm font-medium">Footer</h2>}
                </div>
            </div>
        </div>);
};

export default Modal;
