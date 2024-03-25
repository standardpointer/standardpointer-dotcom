import React from 'react';

const link = (url: string, name: string) => {
  return (
    <div className="m-0.5 text-center hover:text-white">
      <a href={url}>{name}</a>
    </div>
  );
};

export default function DisplayLinks() {}
