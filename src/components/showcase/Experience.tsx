import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Ermis</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                        >
                            <h4>ERMIS</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Back-end Developer</h3>
                        <b>
                            <p>10/2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    An adapter for Hungarian Airport transit system and interact
                    with multiple micro-services.
                    Written in Java using Java Spring boot. Applying other technical as:
                    Kafka, IBMMQ, Docker, Kubernetes.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Creating adapters to communicate between multiple micro-services.
                        </p>
                    </li>
                    <li>
                        <p>
                        Creating services to handle API.
                        </p>
                    </li>
                    <li>
                        <p>
                        Design and create backend for components API, Datastoring, Fetching
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>European Digital Identity Wallet</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h4>E-Wallet</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full-stack developer - Local lead</h3>
                        <b>
                            <p>02/2023 - 10/2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supervised and developed the digital identify wallet application, 
                    an e-wallet to store all of self-sovereign identity. Written in Typescript using React and
                    Java Spring Boot.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Analyze the foundation of the application.
                        </p>
                    </li>
                    <li>
                        <p>
                        Create user stories with related use cases, and tasks with estimation.
                        </p>
                    </li>
                    <li>
                        <p>
                        Prepare documents and technical guides for developers joining in the middle of the project.
                        </p>
                    </li>
                    <li>
                        <p>
                        Create ADR to compare methodologies.
                        </p>
                    </li>
                    <li>
                        <p>
                        Develop a new feature for verifying credentials inside the wallet.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Novo Nordisk</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.novonordisk.co.jp/'}
                        >
                            <h4>www.novonordisk.co.jp/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full-stack developer</h3>
                        <b>
                            <p>06/2022 - 02/2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied solution as services and tools to support the business strategy
                    for multi-channel, allowing the local affiliates to match the high demand for
                    content delivery, to healthcare professionals and patients through new digital channels. 
                    Written in JavaScript using VueJS and Java Sling.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Create new components (drag - drop).
                        </p>
                    </li>
                    <li>
                        <p>
                        Design and create a backend for components API, Data storing, Fetching.
                        </p>
                    </li>
                    <li>
                        <p>
                        Design/Clarify frontend. Developing components with correct UI/UX as design.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
