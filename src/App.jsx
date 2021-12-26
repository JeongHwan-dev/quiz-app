import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PinkButton } from './components/PinkButton';
import { Quiz } from './components/Quiz';
import { nextPage } from './store/modules/score';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
`;

const MainImg = styled.img`
  width: inherit;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  margin: 0 0 30px 0;
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
          <MainImg
            src="/images/city/new-york-city.jpg"
            alt="뉴욕 시티(New York City)"
          />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>진정한 수도 고인물도 100점을 맞기 어렵습니다.</SubHeader>
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
      {page > quizs.length && <Main>마지막 페이지</Main>}
    </>
  );
}

export default App;
