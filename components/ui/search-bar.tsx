// Import necessary hooks and components
import { useState } from 'react';
import { Search } from 'lucide-react';

// Define the props for the SearchBar component
type SearchBarProps = {
  onSearch: (filters: {
    brandName: string;
    location: string;
    hall: string;
    productTag: string;
  }) => void;
};

// Main SearchBar component
export default function SearchBar({ onSearch }: SearchBarProps) {
  // State variables for search inputs
  const [brandName, setBrandName] = useState('');
  const [location, setLocation] = useState('');
  const [hall, setHall] = useState('');
  const [productTag, setProductTag] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    onSearch({
      brandName,
      location,
      hall,
      productTag,
    });
  };

  // Function to handle key down events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Render the search bar UI
  return (
    <div className="max-w-[90%] w-[1200px] mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-[30px] md:rounded-full border shadow-sm">
        {/* Combined search input for mobile */}
        <div className="md:hidden w-full px-4 py-3.5 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search brands, location, hall, or products..."
            className="outline-none w-full bg-transparent"
            value={brandName || location || hall || productTag}
            onChange={(e) => {
              setBrandName(e.target.value);
              setLocation('');
              setHall('');
              setProductTag('');
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Desktop inputs */}
        <div className="hidden md:flex flex-1 divide-x">
          {/* Input for brand name */}
          <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group rounded-l-full">
            <input
              type="text"
              placeholder="Brand name..."
              className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Input for location */}
          <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
            <input
              type="text"
              placeholder="Location..."
              className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Input for hall */}
          <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
            <input
              type="text"
              placeholder="Hall..."
              className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
              value={hall}
              onChange={(e) => setHall(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Input for product tag */}
          <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
            <input
              type="text"
              placeholder="Product tag..."
              className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
              value={productTag}
              onChange={(e) => setProductTag(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Search button */}
        <div className="p-2 md:p-0">
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-primary h-full px-8 py-3 rounded-[20px] md:rounded-full hover:bg-primary/90 transition whitespace-nowrap text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}