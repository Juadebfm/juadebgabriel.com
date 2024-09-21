import React from "react";

const Button = ({ btnText, btnFunc, btnStyle }) => {
  return (
    <button
      className={`${btnStyle} flex items-center justify-center gap-3 font-nunito border border-primary_white rounded-full h-[53px] w-[145px]`}
      onClick={btnFunc}
    >
      <div className="bg-red-500 animate-pulse h-[5px] w-[5px] rounded-full"></div>
      {btnText}
    </button>
  );
};

export default Button;
