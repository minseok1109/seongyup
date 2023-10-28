// @flow
import * as React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};
export const ProjectHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      {subtitle && <h2 className="my-4">{subtitle}</h2>}
    </>
  );
};
