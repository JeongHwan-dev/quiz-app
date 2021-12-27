import React from 'react';

import styled from 'styled-components';

const MyButton = styled.a`
  display: block;
  position: relative;
  margin-bottom: 30px;
  padding: 1.5em 2em;
  border: 2px solid #8599b1;
  border-radius: 0.75em;
  background-color: #fefefe;
  font-weight: bold;
  line-height: 1.6;
  color: #382b22;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out, background 0.15s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2efff;
    background-color: #c4d8f9;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.25s ease-out;
  }
  &:hover {
    transform: translateY(0.25em);

    &::before {
      transform: translate3d(0, 0.4em, -1em);
    }
  }
`;

const BlueButton = ({ text, clickEvent }) => {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
};

export default BlueButton;
