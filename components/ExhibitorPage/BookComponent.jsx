import React from "react";
import { Button } from "../ui/button";

const BookComponent = () => {
  return (
    <section
      className="relative bg-white pt-0 pb-0 md:pt-10 md:pb-10"
      style={{ marginTop: "100px" }}
    >
      <div
        className="mx-auto text-center flex flex-col items-center"
        style={{
          width: "100%", // Maintain full width for responsiveness
          maxWidth: "1200px", // Maintain max width for larger screens
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px", // Added padding for smaller screens
        }}
      >
        <h2
          className="font-poppins font-extrabold text-[40px] md:text-[80px] leading-[1.2] tracking-[-1px] md:tracking-[-4.25px] text-center" // Responsive font size
          style={{
            background: "linear-gradient(90deg, #9747FF 0%, #349EFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          come join us and be the change
        </h2>
        <Button
          variant="outline"
          className="mt-[20px] md:mt-[30px] border-[#3D9BE9] text-[#3D9BE9] hover:bg-[#3D9BE9]"
        >
          Buy Ticket
        </Button>
      </div>
    </section>
  );
};

export default BookComponent;
