// components/DownloadDropdown.js

import { useState } from 'react';

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (language) => {
    // Perform download action based on selected language
    // For example, initiate a download or redirect to a download link
    console.log(`Downloading PDF in ${language}`);
    // Close the dropdown after selecting an option
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" onClick={toggleDropdown}>
        Download PDF
      </button>
      <div className={`dropdown-menu${isOpen ? ' show' : ''}`}>
        <button className="dropdown-item" type="button" onClick={() => handleOptionClick('Hindi')}>
          Download PDF in Hindi
        </button>
        <button className="dropdown-item" type="button" onClick={() => handleOptionClick('English')}>
          Download PDF in English
        </button>
      </div>
    </div>
  );
};

export default DownloadDropdown;
