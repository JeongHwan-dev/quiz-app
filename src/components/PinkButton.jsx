import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  padding: 1.25em 2em;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  background-color: #fff0f0;
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
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    background-color: #f9c4d2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.25s ease-out;
  }
  &:hover {
    background-color: #ffe9e9;
    transform: translateY(0.25em);

    &::before {
      transform: translate3d(0, 0.4em, -1em);
    }
  }
`;

export function PinkButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
