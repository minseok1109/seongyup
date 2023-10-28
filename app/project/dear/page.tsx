import { ProjectHeader } from '@/components/ProjectHeader';
import * as React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <ProjectHeader
        title="DEAR PROJECT"
        subtitle="Discrepancy of self-Efficacy Assessment on Reading"
      />
      <p className="indent-8">
        The question, 'Are you really good or poor at online reading?' serves as
        the cornerstone of this project. Given the diverse learning environments
        today, many learners struggle to accurately assess their own abilities,
        particularly in the context of reading for learning, which involves a
        complex cognitive process. Students often display a tendency to either
        overestimate or underestimate their reading skills.
      </p>
      <p className="indent-8">
        This discrepancy in self-assessment can hinder students from investing
        the appropriate effort and motivation into their learning or lead them
        to undervalue the texts they are meant to learn from. It is also
        plausible to hypothesize that this discrepancy ultimately contributes to
        failures and learning deficiencies.
      </p>
      <p className="indent-8">
        Therefore, this project aims to uncover the relationship between
        self-efficacy and reading competence by profiling, identifying the
        factors that influence it. Our ultimate goal is to develop tailored
        interventions and treatments for individuals based on their unique
        profiles.
      </p>
      <h1 className="text-center text-2xl font-bold my-8">
        &lt;Process of the Project &gt;
      </h1>
      <Image
        className="mx-auto"
        src="/dear_process.png"
        alt="dear_process"
        width={1000}
        height={1000}
      />
      <div className="flex flex-col items-center">
        {' '}
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] my-4">
          <span className="font-bold">
            Ongoing Project (2023~), now on 1st step
          </span>
          <span>Project Leader: : SeongYeup Kim, Cowork: Dr. Yongjun Lee</span>
          <span>Funded: Searching…</span>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[1000px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul>
            <li> Designed all process of project</li>
            <li>
              Developed questionnaire and model based on literature review
            </li>
            <li>Data collection & Coding</li>
            <li>
              Statistics and Analysis (factorial ANOVA, EFA, CFA) in 1st step
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
