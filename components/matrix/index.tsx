import React, { useEffect, useState } from 'react';

import { Text, Container } from './styles';

type Matrix = 'Output' | 'Input';

interface Props {
  type: Matrix;
  text: string;
  speed?: number;
  onFinish?: () => void;
}

const Matrix: React.FC<Props> = ({
  type,
  text,
  speed = 30,
  onFinish,
}) => {
  const [blinkText, setBlinkText] = useState('');

  useEffect(() => {
    let countLetters = 1;
    const timer = setInterval(() => {
      setBlinkText((prevText) => {
        if (prevText === text) {
          clearInterval(timer);
          if (onFinish) onFinish();
          return text;
        }
        return text.slice(0, countLetters)
      });
      ++countLetters;
    }, speed);
    return () => {
      clearInterval(timer);
    };
  }, [speed, text, onFinish]);

  useEffect(() => {
    scrollTo(0, window.document.body.scrollHeight);
  }, [blinkText]);

  return (
    <Container>
      <Text>{type}: {blinkText}</Text>
    </Container>
  );
};

export default Matrix;
