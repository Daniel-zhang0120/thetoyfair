import React, { useState } from 'react';

const ShareButton: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShareOptions = () => {
        setIsExpanded(!isExpanded);
    };

    const shareContent = (platform: string) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check this out!");

        const shareLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            instagram: `https://www.instagram.com/?url=${url}`, // Instagram doesn't have a direct share URL
            whatsapp: `https://api.whatsapp.com/send?text=${text} ${url}`,
            twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            copy: () => {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        };

        if (platform === 'copy') {
            shareLinks.copy();
        } else {
            window.open(shareLinks[platform], '_blank');
        }
    };

    return (
        <div className="relative">
            <button
                onClick={toggleShareOptions}
                className="w-12 h-12 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Share_button.svg')" }}
            >
                <span className="sr-only">Share</span>
            </button>
            {isExpanded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white bg-opacity-80 rounded-lg p-4 flex flex-col items-center space-y-4"
                         style={{ transform: 'translateY(400px)' }}>
                        <button onClick={toggleShareOptions} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <p className="text-center text-lg font-semibold">Share the Toy Fair with the World!</p>
                        <div className="flex space-x-2">
                            <button onClick={() => shareContent('facebook')} className="p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-7 w-7 fill-[#1877f2]">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('instagram')} className="p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#c13584]">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('whatsapp')} className="p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 fill-[#25D366]">
                                    <path d="M380.9 97.1c-45.5-45.5-119.3-45.5-164.8 0L97.1 216.1c-45.5 45.5-45.5 119.3 0 164.8l119.1 119.1c45.5 45.5 119.3 45.5 164.8 0l119.1-119.1c45.5-45.5 45.5-119.3 0-164.8L380.9 97.1zM224 384c-88.2 0-160-71.8-160-160S135.8 64 224 64s160 71.8 160 160-71.8 160-160 160z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('copy')} className="p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7 w-7 fill-black">
                                    <path d="M502.6 70.6c-27.6-27.6-72.4-27.6-100 0L192 281.2V320h38.8L502.6 170.6c27.6-27.6 27.6-72.4 0-100zM192 320v38.8L70.6 480.2c-27.6 27.6-72.4 27.6-100 0s-27.6-72.4 0-100L192 320zM320 192v38.8L198.6 352.2c-27.6 27.6-72.4 27.6-100 0s-27.6-72.4 0-100L320 192z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('twitter')} className="p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7 w-7 fill-[#1DA1F2]">
                                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161.1-47.1 8.4 .9 16.8 1.3 25.6 1.3 49.1 0 94.2-16.8 130.3-45-46.1-.9-84.8-31.2-98.1-72.8 6.5 .9 13.1 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.2-52.1-84.2-103.1v-1.3c14.3 7.9 30.7 12.9 48.1 13.6-28.4-19-46.8-51.3-46.8-87.7 0-19.4 5.2-37.4 14.3-53 51.9 63.7 129.3 105.6 216.4 110.1-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.6 104.6-104.6 30.1 0 57.4 12.9 76.5 33.6 23.7-4.5 46.1-13.3 66.1-25.2-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.4-8.1 60.3-16.2-14.3 20.8-32.1 39.1-52.6 53.6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShareButton; 