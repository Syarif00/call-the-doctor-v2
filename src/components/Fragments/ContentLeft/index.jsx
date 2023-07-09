import React from "react";
import Button from "../../Elements/Button";

const ContentLeft = (props) => {
  const { pict, title, desc } = props;
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 mt-20 lg:gap-5 lg:grid-cols-2">
        <div className="px-5">
          <img
            src={pict}
            alt=""
            className="rounded-lg lg:max-h-[368px] lg:max-w-[552px]"
          />
        </div>
        <div className="px-5">
          <h2 className="my-8 text-3xl font-bold">{title}</h2>
          <p className="font-medium">{desc}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
