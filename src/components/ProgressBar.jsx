import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  margin-top: 60px;
`;

const Gauge = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 10px;
  background-color: #f7f7f7;
  text-align: left;
`;

const Fill = styled.span`
  display: inline-block;
  position: relative;
  top: -4px;
  width: ${(props) => props.width};
  height: inherit;
  background-color: #449ce2;
`;

export function ProgressBar({ page, maxPage }) {
  return (
    <Progress>
      <div className="page">
        {page} / {maxPage}
      </div>
      <Gauge>
        <Fill width={`${(page / maxPage) * 100}%`}></Fill>
      </Gauge>
    </Progress>
  );
}
