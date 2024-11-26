import { useState } from 'react';

export default function SearchBar({ onSearch }: { 
  onSearch: (filters: {
    brandName: string;
    location: string;
    hall: string;
    standNumber: string;
    productTag: string;
  }) => void 
}) {
  const [brandName, setBrandName] = useState('');
  const [location, setLocation] = useState('');
  const [hall, setHall] = useState('');
  const [standNumber, setStandNumber] = useState('');
  const [productTag, setProductTag] = useState('');

  const handleSubmit = () => {
    onSearch({
      brandName,
      location,
      hall,
      standNumber,
      productTag
    });
  };

  return (
    <div className="max-w-[90%] w-[1200px] mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between bg-white rounded-full border shadow-sm divide-x">
        <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group rounded-l-full">
          <input
            type="text"
            placeholder="Brand name..."
            className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>

        <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
          <input
            type="text"
            placeholder="Location..."
            className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
          <input
            type="text"
            placeholder="Hall..."
            className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
            value={hall}
            onChange={(e) => setHall(e.target.value)}
          />
        </div>

        <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group">
          <input
            type="text"
            placeholder="Stand number..."
            className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
            value={standNumber}
            onChange={(e) => setStandNumber(e.target.value)}
          />
        </div>

        <div className="px-4 py-3.5 flex-1 min-w-[150px] hover:bg-gray-100 transition-colors cursor-pointer group rounded-r-[2rem] mr-2">
          <input
            type="text"
            placeholder="Product tag..."
            className="outline-none w-full bg-transparent cursor-pointer group-hover:placeholder-gray-600"
            value={productTag}
            onChange={(e) => setProductTag(e.target.value)}
          />
        </div>

        <div className="p-2">
          <button
            onClick={handleSubmit}
            className="bg-primary h-full px-8 py-3 rounded-full hover:bg-primary/90 transition whitespace-nowrap text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
} 