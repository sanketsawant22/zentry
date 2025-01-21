import React from "react";

const Card = ({ source, title, description, containerClass}) => {
  return (
    <div className="relative size-full">
      <video
        src={source}
        muted
        autoPlay
        loop
        className={`absolute left-0 top-0 size-full object-cover ${containerClass}`}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-52 !text-[0.8rem] !leading-4 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
