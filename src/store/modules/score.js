const CHECK_CORRECT = 'score/CHECK_CORRECT';
const NEXT_PAGE = 'score/NEXT_PAGE';
const RESET_QUIZS = 'score/RESET_QUIZS';

export function checkCorrect({ quizIndex, answerIndex }) {
  return {
    type: CHECK_CORRECT,
    payload: { quizIndex, answerIndex },
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function resetQuizs() {
  return {
    type: RESET_QUIZS,
  };
}

const initialState = {
  score: 0,
  page: 0,
  quizs: [
    {
      quiz: '대한민국의 수도는?',
      answer: [
        {
          text: '서울',
          isCorrect: true,
        },
        {
          text: '인천',
          isCorrect: false,
        },
        {
          text: '부산',
          isCorrect: false,
        },
      ],
    },
  ],
};

export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: state.quizs[action.payload.quizIndex].isCorrect
          ? state.score + 10
          : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET_QUIZS:
      return {
        state: 0,
        page: 0,
      };
    default:
      return state;
  }
}
