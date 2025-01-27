"use client";
import React, { useState, useContext } from 'react';
import { BlurContext } from '@/app/blur-provider';
import Image from 'next/image';

type Platform = 'facebook' | 'instagram' | 'whatsapp' | 'twitter' | 'copy';

const ShareButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { setIsBlurred } = useContext(BlurContext);

    const handleShareClick = () => {
        setIsBlurred(true);
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsBlurred(false);
        setIsExpanded(false);
    };

    const shareContent = (platform: Platform) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check this out!");

        const shareLinks: Record<Platform, string | (() => void)> = {
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
            (shareLinks.copy as () => void)();
        } else {
            window.open(shareLinks[platform] as string, '_blank');
        }
    };

    return (
        <>
            <button
                onClick={handleShareClick}
                className="w-6 h-6 bg-cover bg-center fixed top-4 right-4 z-[60]"
                style={{ backgroundImage: "url('/images/Share_button.svg')" }}
            >
                <span className="sr-only">Share</span>
            </button>
            {isExpanded && (
                <div className="fixed inset-0 flex items-center justify-center z-[60]">
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative bg-white rounded-lg p-8 flex flex-col items-center space-y-8 z-[70] max-w-md w-full mx-4"
                         style={{ 
                            borderWidth: '15px', 
                            borderColor: 'white', 
                            borderRadius: '1rem'
                         }}>
                        <button 
                            onClick={handleClose} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>
                        <p className="text-center text-xl font-semibold">Share the Toy Fair with the World!</p>
                        <div className="flex gap-6">
                            <button onClick={() => shareContent('facebook')} className="p-3 rounded hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-8 w-8 fill-[#1877f2]">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('instagram')} className="p-3 rounded hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 fill-[#c13584]">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('whatsapp')} className="p-3 rounded hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#128c7e" viewBox="0 0 448 512" className="h-8 w-8">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </button>
                            <button onClick={() => shareContent('copy')} className="p-3 w-16 rounded hover:bg-gray-100">
                                <Image 
                                    src="/images/link-button-svgrepo-com.svg" 
                                    alt="Copy link" 
                                    width={18}
                                    height={18}
                                    className="h-8 w-8"
                                />
                            </button>
                            <button onClick={() => shareContent('twitter')} className="p-3 rounded hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8 fill-[#1DA1F2]">
                                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161.1-47.1 8.4 .9 16.8 1.3 25.6 1.3 49.1 0 94.2-16.8 130.3-45-46.1-.9-84.8-31.2-98.1-72.8 6.5 .9 13.1 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.2-52.1-84.2-103.1v-1.3c14.3 7.9 30.7 12.9 48.1 13.6-28.4-19-46.8-51.3-46.8-87.7 0-19.4 5.2-37.4 14.3-53 51.9 63.7 129.3 105.6 216.4 110.1-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.6 104.6-104.6 30.1 0 57.4 12.9 76.5 33.6 23.7-4.5 46.1-13.3 66.1-25.2-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.4-8.1 60.3-16.2-14.3 20.8-32.1 39.1-52.6 53.6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export { ShareButton };
export default ShareButton; 