// @flow
import * as React from 'react';

type Props = {};
const Ssal = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">SSAL PROJECT</h1>
      <h2 className="my-4">
        <b>T</b>he <b>S</b>eoul <b>S</b>tudent <b>A</b>ssessment <b>o</b>f{' '}
        <b>L</b>iteracy
      </h2>
      <div className="flex flex-col gap-4">
        <p className="indent-8">
          SSAL is a project aimed at developing a literacy assessment tool that
          evaluates early and basic literacy levels for each grade group,
          including 3rd-4th, 5th-6th, 7th-8th, and 9th-10th grades. This project
          was conducted with the purpose of diagnosing and tracking the
          development trends in basic literacy among students in Seoul, South
          Korea, and providing feedback. It has a longitudinal research nature,
          focusing on developing a vertical scale through continuous and
          end-to-end research. SSAL sets the goal of development from
          print-based tests to computer-based tests (CBT).
        </p>
        <p className="indent-8">
          SSAL measures literacy skills that encompass not only text-centric
          print but also multimodal text that serves as a medium for everyday
          problem-solving and learning. In other words, it assesses the ability
          to accurately understand and effectively express diverse content
          (curricular content areas) and formats (media and genres) within the
          contexts of learning and life.
        </p>
        <p className="indent-8">
          By addressing content in the humanities and arts, social and cultural
          studies, as well as science and technology, SSAL assesses discipline
          literacy necessary for cross-curricular learning.
        </p>
      </div>
      <div className="flex flex-col items-center my-8">
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Information of Project</span>
          <ul>
            <li>Ongoing Project (2023~)</li>
            <li>PI: Dr. Hyeok Seo</li>
            <li>
              Funded: Ministry of Education of the ROK and Seoul city Office of
              Education (Approx. $517,000)
            </li>
          </ul>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul>
            <li> Team for managing & administration</li>
            <li>
              Responsible for assisting to manage questionnaire data and
              supported all process of development
            </li>
            <li>Supported the development of items and content examination.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ssal;
