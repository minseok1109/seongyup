import * as React from 'react';
import { ProjectHeader } from '@/components/ProjectHeader';
import Image from 'next/image';

const KsoafHopeLadder = () => {
  return (
    <div>
      <ProjectHeader title="Kosaf Hope Ladder PROJECT" />
      <div className="flex flex-col gap-4">
        <p className="indent-8">
          Kosaf(The Korea Student Aid Foundation) collaborates with the Ministry
          of Education to annually recommend and draft university student
          mentors from across the country. Mentors are selected based on
          recommendations from professors and universities, and they must
          possess foreign language proficiency and educational competence. Kosaf
          then carries out a learning and motivation support project aimed at
          promoting Educational Equity and addressing educational disparities.
        </p>
        <p className="indent-8">
          Hope Ladder Project―Multicultural student mentoring project―provides
          learning opportunities for multicultural students to adapt to school
          life and improve their basic academic skills. University student
          mentors who participate in the project implement education programs
          they have independently designed for students assigned to them by the
          institution. Mentoring sessions are conducted regularly over the
          course of one year.
        </p>
        <p className="indent-8">
          To be more specific, I was responsible for four 4th~6th grade
          students, consisting of two female students and three male students
          (Yoonhee, Eunseo, Ilhwan, Minseok, Sangjoon). I designed an integrated
          education program that focuses on 'reading texts' in the subjects of
          science, art, and social studies. Students, following the mentor's
          selection, read texts related to the chosen topic for 40 minutes,
          engaged in activities related to it for an hour, and shared their
          experiences. For instance, in the field of science, after reading a
          text about air pollution, students participated in an activity where
          they envisioned a future era plagued by severe air pollution. In art,
          they read about the 'protégé technique,' ventured outside to observe
          objects, and applied the technique to create their own drawings. In
          the realm of social studies, students read texts dealing with
          conflicts, then wrote and shared letters with each other.
        </p>
      </div>
      <div className="flex items-center gap-2 justify-center my-8">
        <Image src="/kosaf1.jpg" width={400} height={400} alt={'kosaf'} />
        <Image src="/kosaf2.jpg" width={400} height={400} alt={'kosaf'} />
      </div>
      <div className="flex flex-col items-center">
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] my-4">
          <span className="font-bold">Information of Project</span>
          <span>Participated in 2019~2021(Dec.)</span>
          <span>Project Leader: SeongYeup Kim</span>
          <span>
            Funded: The Korea Student Aid Foundation (Approx. $1,600){' '}
          </span>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul>
            <li> Designed the entire learning program process</li>
            <li>
              Developed the program curriculum and learning materials about
              reading and activities within the fields of science and social
              studies.
            </li>
            <li>
              Participated as an instructor every Tuesday to facilitate literacy
              education
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KsoafHopeLadder;
