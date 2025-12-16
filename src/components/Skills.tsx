import styles from './Skills.module.css';
import RevealOnScroll from './RevealOnScroll';

const skillCategories = [
    {
        title: "Strategic Advisory",
        skills: ["Corporate Strategy & Governance", "Policy Formulation", "Organizational Restructuring", "Change Management"]
    },
    {
        title: "Project & Program Management",
        skills: ["End-to-End Project Delivery", "Agile & Lean Methodologies", "Resource & Budget Optimization", "Risk Assessment & Mitigation"]
    },
    {
        title: "Innovation & Data",
        skills: ["Data-Driven Decision Making", "Business Innovation", "Performance Monitoring", "Strategic Planning"]
    },
    {
        title: "Core Competencies",
        skills: ["Human Resources (HR)", "Stakeholder Management", "Public-Private Dialogue", "Consulting"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Expertise & Capabilities</h2>
                    <p>Delivering strategic value through a comprehensive range of professional services.</p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className={styles.card}>
                                <h3>{category.title}</h3>
                                <ul className={styles.list}>
                                    {category.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
