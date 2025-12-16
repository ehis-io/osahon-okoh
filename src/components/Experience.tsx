import styles from './Experience.module.css';
import RevealOnScroll from './RevealOnScroll';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH",
        role: "Policy Advisor",
        period: "Feb 2024 – Present",
        description: [
            "Advises on Sustainable and Inclusive Economic Development for Employment in Nigeria (SEDIN).",
            "Supports policy formulation and strategic initiatives for employment and MSME development."
        ]
    },
    {
        company: "Junior Tech Africa",
        role: "Managing Partner",
        period: "Jul 2017 – Mar 2024",
        description: [
            "Founded a social enterprise focused on STEM education for children aged 6–18.",
            "Implemented school clubs, creative centers, and boot camps.",
            "Oversaw HR and executive management functions."
        ]
    },
    {
        company: "Edo State Government",
        role: "Team Lead, Special Duties Delivery Unit",
        period: "Jul 2021 – Jan 2024",
        description: [
            "Collaborated with ministries and agencies to improve project delivery and organizational strategies."
        ]
    },
    {
        company: "Edo State Government",
        role: "Project Manager, Economic Management Team",
        period: "Feb 2020 – Jun 2021",
        description: [
            "Utilized data analysis to support planning and integration of government programs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Professional Experience</h2>
                    <p>A proven record in public and private sectors.</p>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    {index + 1}
                                </div>
                                <div className={styles.content}>
                                    <h3>{exp.company}</h3>
                                    <span className={styles.role}>{exp.role}</span>
                                    <span className={styles.date}>{exp.period}</span>
                                    <ul className={styles.description}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
