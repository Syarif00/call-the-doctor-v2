import React from "react";
import Button from "../../Elements/Button";

const ContentRight = (props) => {
  const { pict, title, desc } = props;
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col-reverse mt-20 lg:space-x-44 lg:flex-row ">
        <div className="px-5">
          <h2 className="my-8 text-3xl font-bold">{title}</h2>
          <p className="font-medium ">{desc}</p>
          <Button />
        </div>
        <div className="px-5">
          <img
            src={pict}
            alt=""
            className="rounded-lg lg:max-h-[368px] lg:max-w-[552px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
