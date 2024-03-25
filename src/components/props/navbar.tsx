import React from 'react';
import '../components.css';

interface TWProps {
  title?: string;
  link: string;
  content?: string;
}

const SiteLink: React.FC<TWProps> = ({ title, link, content }) => {
  return (
    <div className="m-0.5 text-center hover:text-white">
      <a href={link}>{title}</a>
      <p>{content}</p>
    </div>
  );
};

interface NavbarProps {
  hue: string;
}

const Navbar: React.FC<NavbarProps> = ({ hue }) => {
  return (
    <div
      className={'w-full flex flex-col mt-20 items-center'}
      style={{ color: hue }}
    >
      <div className="mb-16 grid w-full grid-cols-1 md:grid-cols-5 gap-4">
        <SiteLink
          title="IG"
          link="https://instagram.com/standardpointer"
          content="pics"
        />
        <SiteLink
          title="Blog"
          link="https://blog.standardpointer.com"
          content="words"
        />
        <SiteLink
          title="Twitter"
          link="https://twitter.com/standardpointer"
          content="fewer words"
        />
        <SiteLink
          title="SoundCloud"
          link="https://soundcloud.com/standardpointer"
          content="tunes"
        />
        <SiteLink
          title="GitHub"
          link="https://github.com/standardpointer"
          content="src code"
        />
      </div>
    </div>
  );
};

export default Navbar;
