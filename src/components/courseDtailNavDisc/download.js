import { useState } from 'react';

// URLs of the PDF files
const hindiPdfUrl = 'https://www.dropbox.com/scl/fi/no6z8xgltckxz4lf77ybr/Commercial-Goat-Farming-Hindi.pdf?rlkey=vhb258xk2zo16vox46dbszp2b&st=p6wghkhl&dl=0';
const englishPdfUrl = 'https://www.dropbox.com/scl/fi/vqyb4i3zs70r3d648jm2s/Commercial-Goat-Farming-English.pdf?rlkey=85ny5rm8dgof5vzd3ljwosuls&st=k8ruaib1&dl=0';

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (language) => {
    // Fetch PDF based on selected language
    const url = language === 'Hindi' ? hindiPdfUrl : englishPdfUrl;
    
    // Create anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = `document_${language}.pdf`;
    a.target = '_blank'; // Open in new tab
    document.body.appendChild(a);

    // Trigger download
    a.click();

    // Clean up
    document.body.removeChild(a);

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
