import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover  bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="text-white  text-center w-full bg-gray-900/60 p-2 font-serif font-family:Times New Roman ">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
