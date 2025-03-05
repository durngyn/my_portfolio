"use client";

import React, { useState, useEffect } from 'react';

interface BlinkingCursorProps {
  color?: string;
  width?: number;
  height?: number;
  blinkRate?: number;
}

const BlinkingCursor: React.FC<BlinkingCursorProps> = ({
  color = 'rgb(172, 175, 181)',
  width = 2,
  height = 25,
  blinkRate = 530, // milliseconds
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, blinkRate);

    return () => clearInterval(interval);
  }, [blinkRate]);

  return (
    <span
      style={{
        display: 'inline-block',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: visible ? color : 'transparent',
        verticalAlign: 'middle',
        marginLeft: '3px',
        transition: 'background-color 0.2s ease',
      }}
    />
  );
};

export default BlinkingCursor;