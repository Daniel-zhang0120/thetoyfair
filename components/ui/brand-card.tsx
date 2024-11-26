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
}

interface BrandCardProps {
  brandData: BrandData;
}

const BrandCard = (props: BrandCardProps) => {
  const { brandData } = props;
  const {
    standNumber,
    type,
    companyImage: productImg,
    title,
    description: description,
    exhibitorImage: userImg,
    exhibitorName: userName,
    jobTitle: userRole,
  } = brandData;

  return (
    <div className=" break-inside-avoid bg-gradient-to-b from-[#F9F9EE] to-[#E3E3D9] w-full mx-auto p-6 rounded-2xl text-center shadow-lg m-2">
      <div className="flex flex-col items-center gap-5 mb-4">
        {/* Type Badge */}
        <div className="text-white bg-[#9747FF] py-1 px-4 text-sm font-semibold rounded-md">
          <span>{type}</span>
        </div>

        {/* Stand Number */}
        <p className="text-xs font-light mt-1">{standNumber}</p>

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

        {/* Title */}
        <h1 className="font-semibold text-2xl leading-none">{title}</h1>

        {/* Description */}
        {description && (
          <p className="text-sm font-light leading-5">{description}</p>
        )}

        {/* Visit Show Link */}
        <a
          href="https://xpofairs.com/events-box-office"
          className="mt-2 px-5 py-2 border-2 border-[#272624] rounded-full text-sm font-medium text-[#272624] hover:bg-[#272624] hover:text-white transition-all"
        >
          Visit Show
        </a>

        {/* Contact Info */}
        <div className="flex items-center gap-5 mt-4">
          <Image
            src={userImg}
            alt="profile-pic"
            width={60}
            height={60}
            className="object-cover max-w-[60px] w-full h-full"
          />

          <div className="text-center w-full ">
            <h3 className="font-semibold text-black">{userName}</h3>
            <p className="ttext-xs text-black">{userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;