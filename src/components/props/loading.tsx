import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onProgressComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onProgressComplete,
}) => {
  const loadingASCII = `
  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  000000000000000000000000000000000000000000000000ooook00000000000000000000000000000000000000000000000
  00000000000000000000000000000000000000000000000o,,,,o00000000000000000000000000000000000000000000000
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kxkOKKKKKKKK0o,,,;o0KKKKKKKKOkxk0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl;,;ckKOkkkkkxc,,;;lxkkkkk0Kxc;;;o0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOc,,,:xKx;;;;;;;,,;;;;;;;;:xKd;,;;lOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOxddk0Kxc:cccc;,,;;;ccccclkK0kddxOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000Ol,,,;oO000000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0o,;,,o0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kxxk0KKKKKKK0o;;;;o0KKKKKKKOdlldOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl,,,:xKKKKKKKKOxkkkOKKKKKKK0o,,;,ckKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKOl,,,:xKKKKKKKKKKKKKKKKKKKKKKkl;,,:xKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0xdxOKKKKKKKKKKKKKKKKKKKKKKKKx:,;lOKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  00000000000000000000000000000000000000000000000000000000000000c;cd0000000000000000000000000000000000
  0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
`;
  const [loadingText, setLoadingText] = useState<string>('Initializing...');
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (progress === 100) {
      onProgressComplete();
      return;
    }
    const loadingTextOptions = [
      'Checking For Updates ...',
      'Updating Drivers ...',
      'Hold on ...',
      'Fetching data ...',
      'Checking Cache ...',
      'Reading Config ...',
    ];

    const progressLoad = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = Math.min(prev + 10, 100);
        if (nextProgress === 100) {
          clearInterval(progressLoad);
        }
        return nextProgress;
      });
      setLoadingText(
        loadingTextOptions[
          Math.floor(Math.random() * loadingTextOptions.length)
        ]
      );
    }, 250);
    return () => clearInterval(progressLoad);
  }, [progress]);

  return (
    <div className="bg-black min-w-0 overflow-hidden w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-white text-2xl mb-2">nifty</p>
      <span className="mb-8 whitespace-pre text-mainPurple text-center">
        {loadingASCII}
      </span>
      <div className="relative flex items-center justify-center w-40 h-40">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-current text-mainSilver fill-none transition-[stroke-dashoffset] duration-250 ease"
            strokeWidth="4"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
          />
        </svg>
        <div className="font-fira text-mainSilver loading-text text-md absolute text-center leading-tight">
          {loadingText}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
