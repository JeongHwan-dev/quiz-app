import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BlueButton } from './BlueButton';
import { ProgressBar } from './ProgressBar';
import { checkCorrect, nextPage } from './../store/modules/score';
import styled from 'styled-components';

const QuizTitle = styled.h1`
  margin: 50px 0;
`;

export function Quiz() {
  const quizs = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      <QuizTitle>{quizs[page - 1].quiz}</QuizTitle>
      {quizs[page - 1].options.map((option) => (
        <BlueButton
          text={option.text}
          key={option.text}
          clickEvent={() => {
            console.log(option.isCorrect);
            dispatch(checkCorrect({ isCorrect: option.isCorrect }));
            dispatch(nextPage());
          }}
        />
      ))}
      <ProgressBar page={page} maxPage={quizs.length} />
    </>
  );
}
