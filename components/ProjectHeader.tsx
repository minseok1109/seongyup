// @flow
import * as React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const BoldFirstLetter = ({ subTitle }: { subTitle: string }) => {
  const letters = Array.from(subTitle); // 문자열을 문자 배열로 변환

  return (
    <span className="mb-8">
      {letters.map((letter, index, arr) => {
        if (index === 0 || arr[index - 1] === ' ') {
          return (
            <span key={index} className="font-bold">
              {letter}
            </span>
          );
        }
        return <span key={index}>{letter}</span>;
      })}
    </span>
  );
};

export const ProjectHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      {subtitle && <BoldFirstLetter subTitle={subtitle} />}
    </>
  );
};
