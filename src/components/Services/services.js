import './services.css';

function Services () {

    const handleClick = (num) => {
        // console.log("num: ", num);
        let id = "p" + num;
        let paragraph = document.getElementById(id);
        // console.log("paragraph: ", paragraph);
        paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
        let vertId = "vert" + num
        let vert = document.getElementById(vertId);
        vert.style.display = vert.style.display === 'none' ? 'block' : 'none';
    };

    return (
        <div>
            <div className="container services">
                <h1 className="s-title">Our Services</h1>
                <div className="service">
                    <div className="grid" onClick={() => handleClick("1")}>
                        <div className="s-left">
                            <h1>Mortgage</h1>
                            <p id="p1" style={{display: 'none'}}><a href="#">Better Mortgage</a> is working to make purchasing and refinancing homes less stressful, and a whole lot simpler. That means no origination fees, a 100% online process, and pre-approval in as little as 3 minutes.</p>
                        </div>
                        <div className="s-right">
                            <div className="horiz"></div>
                            <div className="vert" style={{display: 'block'}} id="vert1"></div>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="grid" onClick={() => handleClick("2")}>
                        <div className="s-left">
                            <h1>Real estate</h1>
                            <p id="p2" style={{display: 'none'}}><a href="#">Better Real Estate</a> matches you with a trusted real estate agent in your area. If you work with one of our partner agents, you’ll get $2,000 off your Better Mortgage loan closing costs.</p>
                        </div>
                        <div className="s-right">
                            <div className="horiz"></div>
                            <div className="vert" style={{display: 'block'}} id="vert2"></div>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="grid" onClick={() => handleClick("3")}>
                        <div className="s-left">
                            <h1>Title insurance</h1>
                            <p id="p3" style={{display: 'none'}}><a href="#">Better Settlement Services</a> works directly with Better Mortgage, communicating seamlessly and quickly so closing is more efficient.</p>
                        </div>
                        <div className="s-right">
                            <div className="horiz"></div>
                            <div className="vert" style={{display: 'block'}} id="vert3"></div>
                        </div>
                    </div>
                </div>
                <div className="service" id="s-last">
                    <div className="grid" onClick={() => handleClick("4")}>
                        <div className="s-left">
                            <h1>Homeowners insurance</h1>
                            <p id="p4" style={{display: 'none'}}>It can be overwhelming to sort through homeowners insurance options, but <a href="#">Better Cover</a> provides personalized quotes, fast. We work with some of the best in the industry to find you the right policy, and then help finalize it.</p>
                        </div>
                        <div className="s-right">
                            <div className="horiz"></div>
                            <div className="vert" style={{display: 'block'}} id="vert4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-links" style={{padding: '80px 0'}}>
                <h1 style={{marginBottom: 30, fontSize: 45}}>Ready to get started?</h1>
                <p>Get pre-approved with Better Mortgage in as little as 3 minutes.</p>
                <a className="btn-primary">Get Started</a>
            </div>
        </div>
    );
}

export default Services;