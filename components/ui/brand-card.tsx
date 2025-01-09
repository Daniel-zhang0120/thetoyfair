import React from "react";
import Image from "next/image";

interface BrandData {
  standNumber: string;
  type: string;
  companyImage: string;
  title: string;
  description: string;
  exhibitorImage: string;
  exhibitorName: string;
  jobTitle: string;
  hall: string;
  productTags: string[];
}

interface BrandCardProps {
  brandData: BrandData;
}

const truncateText = (text: string, limit: number = 300) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + '...';
};

const BrandCard = (props: BrandCardProps) => {
  const { brandData } = props;
  const {
    standNumber,
    type,
    companyImage: productImg,
    title,
    description,
    exhibitorImage: userImg,
    exhibitorName: userName,
    jobTitle: userRole,
    hall,
    productTags,
  } = brandData;

  return (
    <div className="break-inside-avoid bg-gradient-to-b from-[#F9F9EE] to-[#E3E3D9] w-full mx-auto p-6 rounded-2xl text-center shadow-lg m-2">
      <div className="flex flex-col items-center gap-5 mb-4">
        {/* Type Badge */}
        <div className="text-white bg-[#9747FF] py-1 px-4 text-sm font-semibold rounded-md">
          <span>{type}</span>
        </div>

        {/* Hall and Stand Number - Updated to be together and larger */}
        <p className="text-lg font-medium mt-1">
          Hall {hall} - Stand {standNumber}
        </p>

        {/* Company Image */}
        {productImg && (
          <div className="w-full max-w-[290px] h-[175px] overflow-hidden rounded-lg shadow-md">
            <Image
              src={productImg}
              alt="company-pic"
              width={290}
              height={175}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Product Tags - Added below image */}
        <div className="flex flex-wrap gap-2 justify-center">
          {productTags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#9747FF] text-white px-4 py-1 rounded-full text-sm hover:bg-[#8033FF] transition-colors"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-semibold text-2xl leading-none">{title}</h1>

        {/* Description */}
        {description && (
          <p className="text-sm font-light leading-5 whitespace-pre-line">
            {truncateText(description)}
          </p>
        )}

        {/* Visit Show Link */}
        <a
          href="https://xpofairs.com/events-box-office"
          className="mt-2 px-5 py-2 border-2 border-[#272624] rounded-full text-sm font-medium text-[#272624] hover:bg-[#272624] hover:text-white transition-all"
        >
          Visit Show
        </a>

        {/* Contact Info - Only display if both userImg and userName are valid and not filler content */}
        {userImg && 
         userName && 
         userImg.trim() !== '' && 
         userName.trim() !== '' && 
         userName !== 'No Exhibitor' && 
         userRole !== 'N/A' ? (
          <div className="flex items-center gap-5 mt-4">
            <div className="relative w-[60px] h-[60px] flex-shrink-0">
              <Image
                src={userImg}
                alt="profile-pic"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div className="text-center w-full">
              <h3 className="font-semibold text-black">{userName}</h3>
              <p className="text-xs text-black">{userRole}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BrandCard;