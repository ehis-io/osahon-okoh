"use client";
import { useState } from 'react';
import styles from './AiGovernance.module.css';

const AiGovernance = () => {
    const [score, setScore] = useState<number | null>(null);
    const [answers, setAnswers] = useState<Record<string, boolean>>({});

    const handleCheck = (id: string) => {
        setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const calculateScore = () => {
        const yesCount = Object.values(answers).filter(Boolean).length;
        setScore(yesCount);
    };

    return (
        <section id="ai-governance" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>New Service</span>
                    <h2 className={styles.title}>AI Governance Advisory</h2>
                    <p className={styles.description}>
                        Navigating the complexities of Artificial Intelligence compliance, ethics, and strategy for forward-thinking organizations.
                    </p>
                    <a href="https://aigov.osahonokoh.com" className="btn btn-primary">Visit AI Governance Hub</a>
                </div>

                <div className={styles.widget}>
                    <div className={styles.widgetHeader}>
                        <h3>AI Readiness Self-Check</h3>
                        <p>Quickly assess your organization's basic AI preparedness.</p>
                    </div>

                    <div className={styles.checklist}>
                        <label className={styles.checkItem}>
                            <input type="checkbox" onChange={() => handleCheck('policy')} />
                            <span>Do you have a clear internal AI usage policy?</span>
                        </label>
                        <label className={styles.checkItem}>
                            <input type="checkbox" onChange={() => handleCheck('data')} />
                            <span>Is your data governance framework AI-ready?</span>
                        </label>
                        <label className={styles.checkItem}>
                            <input type="checkbox" onChange={() => handleCheck('training')} />
                            <span>Have staff received AI ethics training?</span>
                        </label>
                        <label className={styles.checkItem}>
                            <input type="checkbox" onChange={() => handleCheck('audit')} />
                            <span>Do you have a process for auditing AI outputs?</span>
                        </label>
                    </div>

                    <div className={styles.widgetFooter}>
                        {score === null ? (
                            <button onClick={calculateScore} className={styles.checkBtn}>Check Readiness</button>
                        ) : (
                            <div className={styles.result}>
                                <p>You checked {score}/4 key items.</p>
                                <a href="#contact" className={styles.link}>Get a full assessment &rarr;</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiGovernance;
