import React from 'react';

import bank from '../../../assets/pictures/projects/bank.png';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Photographic</h1>
            <h3>Hobby</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development,
                    Photographer will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the artistic side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Marathon Techcombank</h2>
                <br />
                <p>
                    Back to the year 2019, I had a chance to join as a freelance Photographer of Techcombank marathon.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={bank} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> The Touch.
                        </sub>
                    </p>
                </div>
                <p>
                I discovered a profound sense of fulfillment in my work and witnessed significant growth in my skills. 
                In 2017, I delved into photography, infusing my captures with a nostalgic essence through editing. 
                The moment my inaugural photograph gained traction and was embraced by a client, 
                I was taken aback by the unexpected success.
                </p>
                <br />
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
