import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCorrect, nextPage } from './../store/modules/score';

import styled from 'styled-components';

import BlueButton from './BlueButton';
import ProgressBar from './ProgressBar';

const QuizTitle = styled.h1`
  margin: 50px 0;
`;

const FlagImg = styled.img`
  width: inherit;
  margin-bottom: 50px;
`;

const Quiz = () => {
  const quizs = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      <QuizTitle>{quizs[page - 1].quiz}</QuizTitle>
      {quizs[page - 1].image && (
        <FlagImg src={quizs[page - 1].image} alt={quizs[page - 1].quiz} />
      )}
      {quizs[page - 1].options.map((option) => (
        <BlueButton
          text={option.text}
          key={option.text}
          clickEvent={() => {
            dispatch(checkCorrect({ isCorrect: option.isCorrect }));
            dispatch(nextPage());
          }}
        />
      ))}
      <ProgressBar page={page} maxPage={quizs.length} />
    </>
  );
};

export default Quiz;
