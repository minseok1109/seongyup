// @flow
import * as React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <h1>SAMSUNG DREAMCLASS ―ONLINE LEARNING PROGRAM PROJECT</h1>
      <p className="indent-8">
        The slogan of Samsung Dreamclass is “Fair Start”. It is a Samsung
        corporate social responsibility program designed to support students
        facing difficulties in pursuing their dreams and developing aspirations
        and capacity for their future careers. Dreamclass offers a blended
        learning experience, both online and offline, where students cultivate
        essential competencies needed in the era of the Fourth Industrial
        Revolution through various learning activities.
      </p>
      <p className="indent-8">
        In particular, the 'Future Competencies' curriculum includes learning
        programs such as 'Reading,' 'Global Communication,' 'Logic and
        Mathematics,' and 'Creative Coding.' The 'Reading’ program consists of
        tiered instruction on core reading strategies to enhance literacy skills
        and thematic reading. It is aimed to expand thinking and expression
        through books as source material.
      </p>
      <p className="indent-8">
        In 2022, the Dreamclass 'Reading Program' utilized ZEP to create a
        Metaverse learning environment. Each team was composed of an instructor,
        an instructional supporter, and 6 to 8 students. Learning took place in
        the Metaverse as students followed the instructor's guidance, engaging
        in activities like reading texts, watching videos, participating in
        discussions and interactive games.
      </p>
      <div className="flex gap-2 justify-center my-12">
        <Image src="/samsung1.png" width={400} height={400} alt="samsung" />
        <Image src="/samsung2.png" width={400} height={400} alt="samsung" />
      </div>
      <div className="flex flex-col items-center">
        {' '}
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Information of Project</span>
          <ul>
            <li>Participated in 2022</li>
            <li>PI: Dr. Joohwan Kim, Dr. Soonyoung Lee</li>
            <li>Funded: Samsung Foundation</li>
          </ul>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul>
            <li>
              Participated as an instructional supporter and contents develop
              supporter
            </li>
            <li>
              Assisted the facilitation of the learning program and conducted
              supportive instructional sessions in metaverse.
            </li>
            <li>
              Contributed ideas during contents development meetings and
              demonstrated demo lessons
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
