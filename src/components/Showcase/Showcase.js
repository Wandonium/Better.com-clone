import React, { useEffect, useState } from 'react';
import './Showcase.css'

function Showcase() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
            let part2_h1 = document.getElementById("part2-h1");
            let part2_p = document.getElementById("part2-p");
            let showcase = document.getElementById("showcase")
            if(window.pageYOffset >= 750 /*&& window.pageYOffset <= 1320*/) {
                showcase.style.backgroundColor = "#281741";
                part2_h1.style.color = "#fff";
                part2_p.style.color = "#fff";
            } else {
                showcase.style.backgroundColor = "#fff";
                part2_h1.style.color = "#281741";
                part2_p.style.color = "#281741";
            }
        }
    }, []);

    // console.log(offset); 

    return(
        <div id="showcase">
            <div className="notification">
                <p>When we couldn’t find a better way to mortgage, we created one | <a href="#">Discover what makes Better, better</a></p>
            </div>
            <div className="showcase container">
                <div className="left">
                    <h1 id="title">Better Mortgage</h1>
                    <ul>
                        <li><h1>No lender fees.</h1></li>
                        <li><h1>No commision.</h1></li>
                        <li><h1>No, really.</h1></li>
                    </ul>
                    <p>We’ve streamlined the mortgage process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.</p>
                    <a href="#" className="btn-primary">See today's rates</a>
                </div>
                <div className="flex end sticky">
                    <div className="right">
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src="the-vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="left part2">
                    <ul>
                        <li><h1 id="part2-h1">It doesn't have to be so complicated</h1></li>
                    </ul>
                    <p id="part2-p">Buying or refinancing a home takes time, patience, and, traditionally, a lot of paperwork. We’ve dismantled the old mortgage infrastructure and replaced it with innovative technology and far fewer hurdles.</p>
                </div>
            </div>
        </div>
    );
}

export default Showcase;