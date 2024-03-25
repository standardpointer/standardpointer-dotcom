'use client';

/*
 * This file is dedicated to all of the typing-based emulations.
 */

import React, { useState, useEffect, type ReactNode } from 'react';
import { DotPulse } from '@uiball/loaders';
interface TWProps {
  txt: string;
  delay: number;
  loop?: boolean;
  color?: string;
  font?: string;
}

interface LSProps {
  childElement: ReactNode;
  childElement2: ReactNode;
  delay: number;
}

export function BlinkingCursor() {
  return <span className="blinking-cursor">|</span>;
}

const Typewriter: React.FC<TWProps> = ({
  txt,
  delay,
  loop = false,
  color,
  font = 'firacode',
}) => {
  const [currText, setCurrText] = useState('');
  const [currIndex, setCurrIndex] = useState(0);
  const style = `text-${color} font-sans`;

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    let n = txt.length;
    if (loop == true) {
      n = txt.length - 1;
    }

    if (currIndex < n) {
      timeout = setTimeout(() => {
        setCurrText((prevText) => prevText + txt[currIndex]);
        setCurrIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (loop == true || loop == undefined) {
      setCurrIndex(0);
      setCurrText('');
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currIndex, delay, loop, txt]);

  return <span className={style}>{currText}</span>;
};

export const LoadingSequence: React.FC<LSProps> = ({
  childElement,
  childElement2,
  delay,
}) => {
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showDotPulse, setShowDotPulse] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDotPulse(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);

  useEffect(() => {
    const step1Timeout = setTimeout(() => {
      setShowStep1(true);
    }, delay);

    return () => {
      clearTimeout(step1Timeout);
    };
  }, [delay]);

  useEffect(() => {
    if (showStep1) {
      const step2Timeout = setTimeout(() => {
        setShowStep2(true);
      }, delay + 20);
      return () => {
        clearTimeout(step2Timeout);
      };
    }
  }, [showStep1]);

  return (
    <div>
      {showStep1 && <p className="items-center flex"> {childElement}</p>}
      <div>
        {showStep2 ? (
          childElement2
        ) : (
          <div>{showStep1 && <DotPulse color="#A0B2BB" />}</div>
        )}
      </div>
    </div>
  );
};

export default Typewriter;
