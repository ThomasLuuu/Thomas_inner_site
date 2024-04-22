import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import traffic from '../../../assets/pictures/projects/software/traffic.mp4';
// @ts-ignore
import vehicles from '../../../assets/pictures/projects/software/vehicles.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Traffic Detection</h2>
                <br />
                <p>
                    Traffic Detection is a project that I have developed as first year student by applying Python with Computer Vision
                    Here I used background subtractions methods of OpenCV Library of Python and some morphological transformation for accuracy.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={traffic} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Scene of the application.
                            The application detect vehicles cross the drawing blue line.
                        </sub>
                    </p>
                </div>
                <p>
                At the corner of the video you can see the count of the vehicles which gets recorded 
                when they cross a predefined limit. For the calculation of the object coordinates and object ids.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/ThomasLuuu/TrafficDetection"
                        >
                            <p>
                                <b>[GitHub]</b> - Traffic Detection Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Vehicles Rental</h2>
                <br />
                <p>
                    This is my project at University to help people finding vehicles for rent at a specific place.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={vehicles} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> The behavior in Vehicles Rental Website
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                Our collaborative team of developers has created an advanced vehicle rental platform with a focus on seamless user interaction and communication.
                One team member led the development of vehicle posting and location-based search features, leveraging React and Firebase for dynamic functionality and efficient deployment.
                Another team member enhanced user engagement through a sleek chat interface, utilizing Comechat for real-time communication between users.
                Additional team members contributed to visual enhancements, expanded chat capabilities including multimedia sharing, and refined user experience with features like message editing and video calls.
                Together, our team has crafted a comprehensive rental platform, setting new standards for efficiency, usability, and connectivity in the industry.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=9Lwe1jC6K4Q"
                        >
                            <p>
                                <b>[Youtube]</b> - Vehicles Rental Demo
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/ThomasLuuu/vehiclerental"
                        >
                            <p>
                                <b>[GitHub]</b> - Vehicles Rental Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the deployed website is out of date, so you can access the Repository or watch the demo video online. 
                    If this ever changes, however, a link to the web will be added here.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
