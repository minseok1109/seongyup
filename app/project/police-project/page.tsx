// @flow
import * as React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">POLICE PROJECT</h1>
      <h2 className="text-lg my-4">
        <b>P</b>roficient <b>O</b>nline <b>L</b>earning <b>I</b>nstruction
        <b>C</b>onstruct <b>E</b>xploring
      </h2>
      <div className="flex flex-col gap-4">
        <p className="indent-8">
          The POLICE project(proficient online learning instruction construct
          exploring) is aimed at continuously identifying and tracking the
          factors necessary to support learners in interdisciplinary online
          learning. The project involves 158 9th-grade learners from Seoul, all
          of whom participate in learning using only the 'Chromebook' and
          handouts provided by the researchers.
        </p>
        <p className="indent-8">
          In this project, learners exercise agency by actively navigating
          various topics, such as texts and multi-modal contents, directly
          online. They engage in real online learning, involving processes like
          search, comprehension, evaluation, and integration. Additionally,
          learners engage various individual activities (e.g., report writing
          and discourse synthesis) and interactive activities (e.g., mock
          debates in virtual courtroom scenarios) based on online learning to
          discover their preferred learning methods.
        </p>
        <p className="indent-8">
          The responses, interviews, surveys, recorded videos, and assignment
          outputs collected in this project serve as qualitative and
          quantitative evidence for research on the online learning process.
          They vividly represent the "real events" that occur in learning.
          However, due to the limited resources of the researchers, there are
          limitations in conducting the project in a uniform manner.
        </p>
        <p className="indent-8">
          Currently, the analysis of the data is being carried out as research
          by the researcher providing it to their colleagues. However, having an
          advisor could open up possibilities for more extensive research.
        </p>
        <div className="flex gap-2 justify-center my-8">
          <Image src="/police1.jpg" alt="police1" width={400} height={400} />
          <Image src="/police2.jpg" alt="police2" width={400} height={400} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold mb-12">
          &lt;Process of the Project &gt;
        </h1>
        <Image
          className="mx-auto mb-12"
          src="/police_process.png"
          alt="police_process"
          width={700}
          height={700}
        />
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[700px] my-4">
          <span className="font-bold">
            Ongoing Project (2023~), now on 1st step
          </span>
          <span>Project Leader: SeongYeup Kim</span>
          <span>
            Funded: Seoul Metropolitan Office of Education (Approx. $600)
          </span>
        </div>
        <div className="border-2 flex flex-col p-8 gap-2 border-black w-[700px] mb-12">
          <span className="font-bold">Performed role & Participation</span>
          <ul>
            <li>Designed whole process of project</li>
            <li>Developed handout, contents</li>
            <li>Data collection & Coding</li>
            <li>Statistics and Analysis (Advanced Regression, SEM)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
