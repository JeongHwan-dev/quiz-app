import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ScoreDiv = styled.div`
  font-size: 4em;
  color: #e91e63;
`;

const Score = () => {
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  const obtainedScore = useSelector((state) => state.score.score);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      scoreRef.current += 1;
      setScore(scoreRef.current);

      if (scoreRef.current === obtainedScore) {
        clearInterval(scoreInterval);
      }
    }, 20);
  }, []);

  return <ScoreDiv>{score}</ScoreDiv>;
};

export default Score;
