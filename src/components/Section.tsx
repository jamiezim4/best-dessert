import {ReactNode} from "react";

type SectionProps = {
    title?: string
    children: ReactNode
}

const Section = ({children, title}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
};

export default Section;