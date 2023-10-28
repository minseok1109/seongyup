type Props = {};
const Publications = (props: Props) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <ul className="flex flex-col gap-4 my-12">
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
      <span className="my-4 font-bold">(In press)</span>
      <ul className="flex flex-col gap-4 my-4">
        <li>
          <b>Kim, S.</b>,& Oh, J. (2023). A Study on secondary reader's reading
          experience survey – Focusing on perceptions of negative reading
          experience. The Korean journal of Literature & Language Education, 45.
          [In Korean]
        </li>
      </ul>
      <span className="font-bold">(In preparation – Finished Writing)</span>
      <ul className="flex flex-col gap-4 mt-8">
        <li>
          <b>Kim, S.</b>,& Lee, Y., E (2023). Development and Validation of a
          Self-Efficacy Assessment Questionnaire for Adolescent Readers’ On-line
          Reading Ability. [In English]
        </li>
      </ul>
      <ul className="flex flex-col gap-4 my-2">
        <li>
          Oh, J., &<b>Kim, S.</b>(2023). A Study on secondary reader's
          self-selected reading. The Korean journal of Literature & Language
          Education. [In Korean]
        </li>
      </ul>
    </div>
  );
};

export default Publications;
