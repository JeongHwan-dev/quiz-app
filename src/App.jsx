import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PinkButton } from './components/PinkButton';
import { Quiz } from './components/Quiz';
import { nextPage, resetQuizs } from './store/modules/score';
import styled from 'styled-components';
import { Score } from './components/Score';

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  padding: 30px 0;
  text-align: center;
`;

const MainImg = styled.img`
  width: inherit;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  margin: 30px 0;
`;

const SubHeader = styled.h2`
  margin: 0 0 30px 0;
  font-size: 1.1em;
  font-weight: 400;
  color: #6b6b6b;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const quizs = useSelector((state) => state.score.quizs);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <Main>
          <MainImg src="/images/main-city.jpg" alt="뉴욕 시티(New York City)" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>총 5개의 수도 문제가 준비되어 있습니다.</SubHeader>
          <PinkButton
            text="테스트 시작"
            clickEvent={() => {
              dispatch(nextPage());
            }}
          />
        </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는</Header>
          <Score />
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기!"
            clickEvent={() => {
              dispatch(resetQuizs());
            }}
          />
        </Main>
      )}
    </>
  );
}

export default App;
