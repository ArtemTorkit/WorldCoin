import React from "react";

const Card = ({ children }) => {
  return <div className="p-[20px] bg-[#F7F7F7] rounded-[17px] w-full flex flex-col gap-[15px]">{children}</div>;
};

export default Card;
