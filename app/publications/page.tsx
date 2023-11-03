type Props = {};
const Publications = (props: Props) => {
  return (
    <div className={'flex flex-col gap-4 mb-8'}>
      <ul className="flex flex-col gap-4 my-4">
        <li>
          <b>Kim, S.</b>, & Oh, J. (In press). A Study on secondary reader's
          reading experience survey – Focusing on perceptions of negative
          reading experience. The Korean Journal of Literature & Language
          Education, 45. [In Korean]
        </li>
        <li>
          <b>Kim, S.</b> (2023). Information acceptance and perspective
          reconstruction study in multiple-text reading – based on secondary
          reader's stance. Reading Research, 68, 181-216. [In Korean]
        </li>
        <li>
          <b>Kim, S.</b> & Kim, Y. (2023). A study on the effect of writer's
          characteristics on writing performance in relation to the Topic.
          Writing Research, 58, 07-43. [In Korean]
        </li>
        <li>
          <b>Kim, S.</b> (2023). Analysis of differences in writing and
          motivation based on topic selection in middle school student's
          expository writing. The Korean Journal of Literacy Research, 14(1),
          143-168. [In Korean]
        </li>
        <li>
          <b>Kim, S.</b> (2022). Define and review “digital/online reading”
          research in Korea – Focusing on the studies between 2000 to 2022.
          Reading Research, 65, 81-109. [In Korean]
        </li>
      </ul>

      <span className="font-bold">(In preparation – Finished Writing)</span>
      <ul className="flex flex-col gap-4 mt-6">
        <li>
          <b>Kim, S.</b>, Lee, Y. & Forzani, E. (2023). Development and
          validation of a self-efficacy assessment questionnaire for adolescent
          readers’ on-line reading ability. [In English]
        </li>
      </ul>
      <ul className="flex flex-col gap-4 my-2">
        <li>
          Oh, J., & <b>Kim, S.</b> (2023). A study on secondary reader's
          self-selected reading. The Korean Journal of Literature & Language
          Education. [In Korean]
        </li>
      </ul>
      <span className="my-4 font-bold">(In revision)</span>
      <ul className="flex flex-col gap-4 my-2">
        <li>
          <b>Kim, S.</b>, & Han, I. (in revision). Learners’ credibility
          assessment in Online texts and the factors influencing it.
          Learner-centered Curriculum and Instruction. [In English]
        </li>
        <li>
          <b>Kim, S.</b>, & Oh, S. (in revision). Secondary students’
          self-evaluation in multiple-text learning and performance. The Korean
          Journal of Literacy Research. [In Korean]
        </li>
      </ul>
    </div>
  );
};

export default Publications;
