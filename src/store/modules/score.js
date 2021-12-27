const CHECK_CORRECT = 'score/CHECK_CORRECT';
const NEXT_PAGE = 'score/NEXT_PAGE';
const RESET_QUIZS = 'score/RESET_QUIZS';

export function checkCorrect({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
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
      quiz: '캐나다의 수도는?',
      image: '/images/flags/canada-national-flag.jpg',
      options: [
        {
          text: '오타와',
          isCorrect: true,
        },
        {
          text: '토론토',
          isCorrect: false,
        },
        {
          text: '밴쿠버',
          isCorrect: false,
        },
      ],
    },
    {
      quiz: '중국의 수도는?',
      image: '/images//flags/china-national-flag.jpg',
      options: [
        {
          text: '상하이',
          isCorrect: false,
        },
        {
          text: '베이징',
          isCorrect: true,
        },
        {
          text: '시안',
          isCorrect: false,
        },
      ],
    },
    {
      quiz: '대한민국의 수도는?',
      image: '/images//flags/south-korea-national-flag.jpg',
      options: [
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
    {
      quiz: '영국의 수도는?',
      image: '/images//flags/uk-national-flag.jpg',
      options: [
        {
          text: '맨체스터',
          isCorrect: false,
        },
        {
          text: '리버풀',
          isCorrect: false,
        },
        {
          text: '런던',
          isCorrect: true,
        },
      ],
    },
    {
      quiz: '미국의 수도는?',
      image: '/images//flags/usa-national-flag.jpg',
      options: [
        {
          text: '샌프란시스코',
          isCorrect: false,
        },
        {
          text: '워싱턴 D.C',
          isCorrect: true,
        },
        {
          text: '뉴욕 시티',
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
        score: action.payload.isCorrect ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET_QUIZS:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
