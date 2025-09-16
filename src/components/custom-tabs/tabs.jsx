import { useState } from 'react';

export default function Tabs({ tabContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentTabIndex) {
    setCurrentTabIndex(getCurrentTabIndex);
    onChange(getCurrentTabIndex);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-300">
        {tabContent.map((tabItem, index) => (
          <button
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${currentTabIndex === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
          >
            {tabItem.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white  shadow-md">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
}
