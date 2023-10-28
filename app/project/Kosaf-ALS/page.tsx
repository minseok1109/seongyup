import { ProjectHeader } from '@/components/ProjectHeader';
import * as React from 'react';

const KosafALS = () => {
  return (
    <div>
      <ProjectHeader title={'KOSAF Adolescent Learning Support PROJECT'} />
      <div className="flex flex-col gap-4">
        <p className="indent-8">
          Kosaf(The Korea Student Aid Foundation) collaborates with the Ministry
          of Education to annually recommend and draft university student
          mentors from across the country who possess academic capabilities and
          upright character. These mentors are selected based on specific
          criteria and recommendations. Kosaf then carries out a learning and
          motivation support project aimed at promoting Educational Equity and
          addressing educational disparities.
        </p>
        <p className="indent-8">
          Project mentors are rigorously chosen after they submit project
          proposals and budget plans, followed by evaluations from the
          foundation and external experts. Once selected, these mentors actively
          manage the projects and implement learning support programs in schools
          under the foundation's guidance. Every year, project leaders attend
          seminars where they report on and share the outcomes of their
          operations.
        </p>
        <p className="indent-8">
          <b>To be more specific, </b>our team was responsible for 9th~10th
          twelve students. We provided instructions to enhance learners'
          capacity in discipline literacy using texts related to environmental
          science, engineering, and philosophy. Also, we simultaneously
          integrated language arts education. To mitigate learning disruptions
          caused by COVID-19, we implemented a blended learning approach that
          encompassed both online and offline methods.
        </p>
      </div>
      <ul className={'flex flex-col gap-2 my-8'}>
        <span className={'font-bold text-[18px]'}>Topic list</span>
        <li>
          <b>Environmental science:</b> ①Recycling materials ②Climate change,
          ③Yellow dust
        </li>
        <li>
          <b>Engineering:</b> ①Generative AI, ②Deep & machine learning,
          ③Deepfake tech
        </li>
        <li>
          <b> Philosophy:</b> ①A moral dilemma, ②The Habitus, ③The authority in
          school
        </li>
      </ul>
      <div className="flex flex-col items-center">
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] my-4">
          <span className="font-bold">Information of Project</span>
          <span>Participated in 2019~2021(Dec.)</span>
          <span>Project Leader: SeongYeup Kim</span>
          <span>Funded: The Korea Student Aid Foundation (Approx. $6,700)</span>
          <span>Granted: The Excellent Program Leader Prize (No. 2007)</span>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul className={'list-disc list-inside'}>
            <li> Participated as project program leader</li>
            <li>
              Designed the entire learning program process and assembled a team
              of four instructional members
            </li>
            <li>
              Developed the program curriculum and learning materials about
              reading and activities within the fields of science and social
              studies.
            </li>
            <li>
              Participated as an instructor every Thursday to facilitate
              literacy education.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KosafALS;
