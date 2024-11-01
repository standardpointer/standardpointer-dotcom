import React, { useState, useEffect } from 'react';
import Navbar from '../props/navbar';
import '../components.css';
import Typewriter, { LoadingSequence } from '../props/typing';
import LoadingScreen from '../props/loading';
import { BiChevronRight } from 'react-icons/bi';

/*
  This function includes the main landing page, with a corresponding light mode.
*/

function Main() {
  const [buttonState, setButtonState] = useState('Normal');
  // Handler for the button click event
  const lightClick = () => {
    setButtonState(buttonState === 'Normal' ? 'Light' : 'Normal');
    console.log(buttonState);
  };

  const closeClick = () => {
    console.log('Window Closed');
  };

  const minimizeClick = () => {
    console.log('Window Minimized');
  };

  const maximizeClick = () => {
    console.log('Window maximized');
  };

  // Define the initial state and a method to update it
  const Buttons = () => (
    <div className="p-8 flex justify-between">
      <div className="flex space-x-2 text-red-500">
        <button
          className="w-3 h-3 rounded-full border-dashed border-white bg-red-500"
          onClick={closeClick}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-yellow-500"
          onClick={minimizeClick}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-green-500"
          onClick={maximizeClick}
        ></button>
      </div>
      <p
        className={
          buttonState === 'Normal'
            ? 'text-white mr-12 text-sm'
            : 'text-black mr-12 text-sm'
        }
      >
        ptr_lang
      </p>
    </div>
  );

  const ContentBody = () => {
    const aboutMe = (
      <p className={buttonState === 'Normal' ? 'text-white' : 'text-black'}>
        + I'm standardpointer. I enjoy making electronic music and programming.
        <br /> + I'm a software engineer. <br />+ Check out the links above for
        things.
      </p>
    );

    return (
      <body
        className={
          buttonState === 'Normal'
            ? 'bg-black text-lg h-screen min-w-0 flex flex-col overflow-x-hidden'
            : 'bg-mainSilver text-lg h-screen min-w-0 flex flex-col overflow-x-hidden'
        }
      >
        <Buttons />
        <div className="flex items-center justify-center">
          <button
            className={
              buttonState === 'Normal'
                ? ' text-white w-6 h-6 rounded-full border-mainPurple border-3 border-dashed'
                : 'text-black w-6 h-6 rounded-full border-mainPurple border-3 border-dashed'
            }
            onClick={lightClick}
          >
            MODE
          </button>
        </div>
        <div className="flex">
          <Navbar hue={buttonState === 'Normal' ? 'white' : 'black'} />
        </div>

        <div className="flex justify-center" id="test">
          <img
            src="/robot.svg"
            alt="standardrobot logo"
            width="350"
            height="300"
            loading="eager"
          />
        </div>

        <div className="p-12 min-w-0">
          <LoadingSequence
            childElement={
              <span className="items-center flex text-textPurple">
                /home/pointer <BiChevronRight size={24} color="textPurple" />{' '}
                $&emsp;
                <Typewriter
                  color={buttonState === 'Normal' ? 'white' : 'black'}
                  txt="pkg install standardpointer"
                  delay={10}
                />
              </span>
            }
            childElement2={
              <p
                className={
                  buttonState === 'Normal'
                    ? 'w-full text-white'
                    : 'w-full text-black'
                }
              >
                + standardpointer@1.0.0
              </p>
            }
            delay={500}
          />
          <br />
          <LoadingSequence
            childElement={
              <span className="items-center flex text-textPurple">
                /home/pointer <BiChevronRight size={24} color="textPurple" />{' '}
                $&emsp;
                <Typewriter
                  color={buttonState === 'Normal' ? 'white' : 'black'}
                  txt="whoami"
                  delay={20}
                />
              </span>
            }
            childElement2={aboutMe}
            delay={2000}
          />
        </div>
      </body>
    );
  };

  return (
    <>
      <ContentBody />
    </>
  );
}

/*
  This is the primary component called in '../pages/index.astro'
*/
export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(true);

  const handleProgressComplete = () => {
    setLoadingComplete(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem('firstLoadDone') === null) {
      setLoadingComplete(true);
      sessionStorage.setItem('firstLoadDone', '1'); // Set the flag
    }
  }, []);

  return (
    <>
      {loadingComplete ? (
        <LoadingScreen onProgressComplete={handleProgressComplete} />
      ) : (
        <Main />
      )}
    </>
  );
}
