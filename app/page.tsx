import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-center p-8 border-y mb-4 font-bold text-2xl">
          Biography
        </h1>

        <div className="flex  gap-8 p-8">
          <div className="flex flex-col w-[45rem]">
            <Image
              className="mb-4"
              src="/profile.jpg"
              alt="profile image"
              width={200}
              height={160}
            />
            <Link
              className="text-xs underline"
              href="/%5BCV%5D%20SeongYeup%20Kim.pdf"
            >
              [CV] SeongYeup Kim.pdf
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p>
              SeongYeup Kim is a M.Ed. candidate in Korean Language Arts at the
              Korea University. He specializes in Literacy Education and
              Statistics. He is interested in the meaning-making process of
              learning in a digital context and designing learning environments
              that motivate learners. He also engaged in the development of
              literacy instruction programs and assessments.
            </p>
            <p>
              His previous research focused on literacy practices (reading and
              writing) for elementary and middle school students’ learning in
              science and social contents, especially in a digital context. He
              also examined the tasks and individual differences that influence
              their learning and engaging.
            </p>
            <p>
              Currently, he is exploring how to integrate technologies, such as
              VR, AR(virtual and augmented reality) or games, into learning and
              literacy practice and assessment situations, particularly within
              STEM contents. His ultimate goal is to develop a VR-based learning
              program that enhances literacy competence (for educational
              contents) and engages diverse learners to achieve instructional
              equity.
            </p>
            <p>
              <b>Statistics available:</b> He can use <b>SPSS, AMOS, M plus</b>{' '}
              for Basic statistics, ANOVA, ANCOVA, MANCOVA(till factorial),
              Advanced Regression Analysis, SEM(Structural Equation Modeling),
              LPA(Latent Profile Analysis)
            </p>
          </div>
        </div>
        <span className="flex justify-end my-4 font-bold text-right">
          “A Dreamer changes the world!” <br />
          If you are interested in me, please take a look at my projects.
        </span>
      </div>
      <div>
        <h1 className="text-center p-8 border-y mb-4 font-bold text-2xl">
          Selected Publications
        </h1>
        <ul className="flex flex-col gap-4 my-4">
          <li>
            <b>Kim, S.</b> (2023). Information acceptance and perspective
            reconstruction study in multiple-text reading – Based on secondary
            reader's stance. Reading Research, 68, 181-216. [In Korean]
          </li>
          <li>
            <b>Kim, S.</b> & Kim, Y. (2023). A Study on the effect of writer's
            characteristics on writing performance in relation to the Topic.
            Writing Research, 58, 07-43. [In Korean]
          </li>
          <li>
            <b> Kim, S.</b> (2023). Analysis of differences in writing and
            motivation based on topic selection in middle school student's
            expository writing. The Korean journal of Literacy Research, 14(1),
            143-168. [In Korean]
          </li>
          <li>
            <b>Kim, S.</b> (2022). Define and review “digital/online reading”
            research in Korea – Focusing on the studies between 2000 to 2022.
            Reading Research, 65, 81-109. [In Korean]
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-center p-8 border-y mb-4 font-bold text-2xl">
          Conference Presentation
        </h1>
        <ul className="flex flex-col gap-4 py-8">
          <li>
            <b>Kim, S.</b> (October, 2023). Development and Validation of an
            Online Reading Self-Efficacy Assessment Questionnaire for Adolescent
            Readers. Reading Research, Seoul, Republic of Korea. [In English]
          </li>
          <li>
            <b>Kim, S.</b> (April, 2023). Information acceptance and perspective
            reconstruction study in multiple-text reading – Based on secondary
            reader's stance. Paper presented at the 2023 Reading Research,
            Seoul, Republic of Korea. [In Korean]
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-center p-8 border-y mb-4 font-bold text-2xl">
          Honors, Awards, and Grants
        </h1>
        <div>
          <ul className="flex justify-start gap-48 mb-8">
            <span>2022~2023</span>
            <div className="flex flex-col gap-2">
              <li>
                <b>Research Assistant Scholarships</b> (2022, 2023 Spring)
              </li>
              <li>Korea University, Seoul, Republic of Korea</li>
              <li>Teaching Assistant Scholarships(2022, 2023 Fall)</li>
              <li>Korea University, Seoul, Republic of Korea</li>
            </div>
          </ul>
          <ul className="flex justify-start gap-48 mb-8">
            <span>2021~2022</span>
            <div className="flex flex-col gap-2">
              <li className="font-bold">
                Undergraduate Teaching Assistant Scholarships (Spring, Fall)
              </li>
              <li>Andong National University, Seoul, Republic of Korea</li>
              <li>
                for “The theory ofreading education”, “The theory of writing
                education”
              </li>
            </div>
          </ul>
          <ul className="flex justify-start gap-[9.3rem] mb-8">
            <span>2019~2021(Dec.)</span>
            <div className="flex flex-col gap-2">
              <li className="font-bold">
                Low SES group Adolescent Learning Support Project (Educational
                Equity)
              </li>
              <li>
                Got Funded and Awarded “The Excellent Program Leader
                Prize(No.2007)”
              </li>
              <li>The Korea Student Aid Foundation, Republic of Korea</li>
              <li> $ 6,738.27 (As of March 2023)</li>
            </div>
          </ul>
          <ul className="flex justify-start gap-[9.3rem] mb-8">
            <span>2016~2017(Jan.)</span>
            <div className="flex flex-col gap-2">
              <li className="font-bold">
                Multicultural Student Education Mentoring (Hope Ladder)s
              </li>
              <li>The Korea Student Aid Foundation, Republic of Korea</li>
              <li> $ 1,612.34 (As of March 2023)</li>
            </div>
          </ul>
          <ul className="flex justify-start gap-48 mb-8">
            <span>2016~2021</span>
            <div className="flex flex-col gap-2">
              <li className="font-bold">
                Academic-grade Scholarships (Spring, Fall)
              </li>
              <li>Andong National University, Seoul, Republic of Korea</li>
              <li> $ 5,907.63 (As of March 2023) </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-center p-8 border-y mb-4 font-bold text-2xl">
          Education
        </h1>
        <ul className="flex justify-start gap-48 mb-8">
          <div className="text-center">
            2024.08 <div className="text-xs">(Scheduled)</div>
          </div>
          <div className="flex flex-col gap-2">
            <li>
              <b>M.Ed.</b> in Korean Language Arts, Korea University, S. Korea
            </li>
            <li>
              <b>Advisor:</b> Dr. SoonYoung Lee
            </li>
            <li>
              <b>Thesis:</b> A study on the Patterns of Topic-integrated reading
              and Influencing factors among Middle School Readers
            </li>
            <li>
              <b>GPA:</b> 4.5/4.5
            </li>
          </div>
        </ul>
        <ul className="flex justify-start gap-48 mb-8">
          <div className="text-center">2022.02</div>
          <div className="flex flex-col gap-2">
            <li>
              <b>B.A.</b> in Korean Language Arts, Korea University, S. Korea
            </li>
            <li>
              <b>Advisor:</b> Dr. JooHwan Kim
            </li>
            <li>
              <b>GPA:</b> 4.10/4.5
            </li>
          </div>
        </ul>
      </div>
    </main>
  );
}
