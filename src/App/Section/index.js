import { SectionHeadline } from "./styled";

const Section = ({ title, body }) => (
    <section>
        <SectionHeadline>
            {title}
        </SectionHeadline>
        {body}
    </section>
);

export default Section;