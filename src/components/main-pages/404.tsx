import React from 'react';

function getHexaNumb() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0');
}

export default function BlueScreen() {
  return (
    <body className="bg-bsod font-w95fa">
      <p className="text-white fixed max-md:mt-0 max-md:ml-20 mt-20 ml-40 text-2xl ">
        ERROR: 0x{getHexaNumb()}
      </p>
      <div className="flex flex-col items-center justify-center min-w-screen min-h-screen">
        <div className="fixed items-center justify-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-border w-2/12 h-1/8">
          <h1 className=" text-center text-bsod max-md:text-2xl  text-4xl">
            uh - oh
          </h1>
        </div>
        <div className="mt-40 text-center fixed max-w-2xl text-white text-3xl">
          <p>
            look at what you fucking did. You navigated to a nonexistent or
            broken page.
          </p>
          <p className="mt-20 ">nothing here.</p>
          <p className="mt-10">go back.</p>
        </div>
      </div>
    </body>
  );
}
