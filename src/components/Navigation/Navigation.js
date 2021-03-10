import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Navigation() {

  const rotateCaret = (event) => {
    let target = event.target.innerHTML;
    // console.log("target: ", target);
    let caret = "";
    let otherCaret1 = "";
    let otherCaret2 = "";
    let otherCaret3 = "";
    let subMenu = "";
    let otherMenu1 = "";
    let otherMenu2 = "";
    let otherMenu3 = "";
    if(target.includes("Our services")) {
      caret = document.getElementById("caret1");
      otherCaret1 = document.getElementById("caret2");
      otherCaret2 = document.getElementById("caret3");
      otherCaret3 = document.getElementById("caret4");
      subMenu = document.getElementById("sub-services");
      otherMenu1 = document.getElementById("sub-about");
      otherMenu2 = document.getElementById("sub-view");
      otherMenu3 = document.getElementById("sub-learn");
    } else if(target.includes("About us")) {
      caret = document.getElementById("caret2");
      otherCaret1 = document.getElementById("caret1");
      otherCaret2 = document.getElementById("caret3");
      otherCaret3 = document.getElementById("caret4");
      subMenu = document.getElementById("sub-about");
      otherMenu1 = document.getElementById("sub-services");
      otherMenu2 = document.getElementById("sub-view");
      otherMenu3 = document.getElementById("sub-learn");
    } else if(target.includes("View rates")) {
      caret = document.getElementById("caret3");
      otherCaret1 = document.getElementById("caret2");
      otherCaret2 = document.getElementById("caret1");
      otherCaret3 = document.getElementById("caret4");
      subMenu = document.getElementById("sub-view");
      otherMenu1 = document.getElementById("sub-about");
      otherMenu2 = document.getElementById("sub-services");
      otherMenu3 = document.getElementById("sub-learn");
    } else if(target.includes("Learn")) {
      caret = document.getElementById("caret4");
      otherCaret1 = document.getElementById("caret2");
      otherCaret2 = document.getElementById("caret3");
      otherCaret3 = document.getElementById("caret1");
      subMenu = document.getElementById("sub-learn");
      otherMenu1 = document.getElementById("sub-about");
      otherMenu2 = document.getElementById("sub-view");
      otherMenu3 = document.getElementById("sub-services");
    }


    if(caret.classList.contains("caret-rotate-up")){
      caret.classList.remove("caret-rotate-up");
      caret.classList.add("caret-rotate-down");
    } else if(caret.classList.contains("caret-rotate-down")){
      caret.classList.remove("caret-rotate-down");
      caret.classList.add("caret-rotate-up");
    } else {
      caret.classList.add("caret-rotate-down");
    }

    if(otherCaret1.classList.contains("caret-rotate-down")) {
      otherCaret1.classList.remove("caret-rotate-down");
      otherCaret1.classList.add("caret-rotate-up");
    } 
    if(otherCaret2.classList.contains("caret-rotate-down")) {
      otherCaret2.classList.remove("caret-rotate-down");
      otherCaret2.classList.add("caret-rotate-up");
    }
    if(otherCaret3.classList.contains("caret-rotate-down")) {
      otherCaret3.classList.remove("caret-rotate-down");
      otherCaret3.classList.add("caret-rotate-up");
    } 
    
    if(subMenu.style.display === "block") {
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
    }
    otherMenu1.style.display = "none";
    otherMenu2.style.display = "none";
    otherMenu3.style.display = "none";
  };

  return (
    <div className="nav-content">
      <div className="navbar container">
        <div className="flex center">
          <svg role="img" class="icon icon-LogoBetter" width="146px" height="64px" viewBox="0 0 146 31" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>LogoBetter</title><path fill-rule="evenodd" clip-rule="evenodd" d="M21.8811 23.2224L32.3503 29.0126L32.3536 14.5817L21.8811 8.52451V23.2224ZM10.717 1.68408L22.1514 6.94908L11.396 14.5812L11.3923 29.0126L0 23.6784V9.37371L10.717 1.68408Z" fill="currentColor"></path><path d="M52.0084 28.4042C56.1516 28.4042 59.4863 25.3726 59.4863 19.3095V19.04C59.4863 13.0105 56.1516 9.91158 52.0421 9.91158C49.381 9.91158 47.5621 11.3263 46.5516 13.0105V2.63579H40.5221V28H46.5516V25.2716C47.4273 27.1579 49.381 28.4042 52.0084 28.4042ZM49.8863 23.7895C47.6968 23.7895 46.3831 22.2737 46.3831 19.2758V19.0063C46.3831 16.0421 47.6968 14.4589 49.8863 14.4589C52.0084 14.4589 53.3558 15.9411 53.3558 19.04V19.3095C53.3558 22.2063 52.1431 23.7895 49.8863 23.7895ZM70.79 28.4042C76.1121 28.4042 79.1773 26.1474 79.7163 22.1726H74.0573C73.8216 23.3516 72.9794 24.2611 70.9921 24.2611C68.8363 24.2611 67.4889 22.9137 67.3205 20.5895H79.7163V19.0063C79.7163 12.6737 75.5731 9.91158 70.7563 9.91158C65.4342 9.91158 61.2237 13.4821 61.2237 19.1411V19.4105C61.2237 25.1705 65.2658 28.4042 70.79 28.4042ZM67.3879 17.1874C67.691 15.0653 68.9373 13.8863 70.7563 13.8863C72.71 13.8863 73.7542 15.0653 73.8552 17.1874H67.3879ZM89.3047 28.4042C90.7195 28.4042 91.8647 28.1011 92.6395 27.8989V23.3179C92.1005 23.52 91.5952 23.6211 90.9216 23.6211C89.7763 23.6211 89.1363 23.0484 89.1363 21.7684V14.4926H92.6058V10.3832H89.1363V6.71158H83.1068V10.3832H80.9847V14.4926H83.1068V22.3411C83.1068 26.4842 85.33 28.4042 89.3047 28.4042ZM102.397 28.4042C103.812 28.4042 104.957 28.1011 105.732 27.8989V23.3179C105.193 23.52 104.687 23.6211 104.014 23.6211C102.868 23.6211 102.228 23.0484 102.228 21.7684V14.4926H105.698V10.3832H102.228V6.71158H96.1989V10.3832H94.0768V14.4926H96.1989V22.3411C96.1989 26.4842 98.4221 28.4042 102.397 28.4042ZM117.106 28.4042C122.428 28.4042 125.493 26.1474 126.032 22.1726H120.373C120.137 23.3516 119.295 24.2611 117.308 24.2611C115.152 24.2611 113.805 22.9137 113.636 20.5895H126.032V19.0063C126.032 12.6737 121.889 9.91158 117.072 9.91158C111.75 9.91158 107.539 13.4821 107.539 19.1411V19.4105C107.539 25.1705 111.582 28.4042 117.106 28.4042ZM113.704 17.1874C114.007 15.0653 115.253 13.8863 117.072 13.8863C119.026 13.8863 120.07 15.0653 120.171 17.1874H113.704ZM128.614 28H134.644V19.6463C134.644 16.8168 136.665 15.6716 140.336 15.7726V10.1474C137.608 10.1137 135.755 11.2589 134.644 13.8863V10.3832H128.614V28Z" fill="currentColor"></path></svg>
          <nav>
            <ul className="flex">
              <li>
                <a onClick={rotateCaret}>
                  Our services <FontAwesomeIcon id="caret1" style={{fontSize: 13, marginLeft: 5}} icon={faChevronDown} size="sm"/>
                </a>
                <ul className="sub-menu" id="sub-services">
                  <li><a href="#">Mortgage</a></li>
                  <li><a href="#">Real estate</a></li>
                  <li><a href="#">Title insurance</a></li>
                  <li><a href="#">Homeowners insurance</a></li>
                </ul>
              </li>
              <li>
                <a onClick={rotateCaret}>
                  About us <FontAwesomeIcon id="caret2" style={{fontSize: 13, marginLeft: 5}} icon={faChevronDown} size="sm"/>
                </a>
                <ul className="sub-menu" id="sub-about">
                  <li><a href="#">Our company</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Media</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </li>
              <li>
                <a onClick={rotateCaret}>
                  View rates <FontAwesomeIcon id="caret3" style={{fontSize: 13, marginLeft: 5}} icon={faChevronDown} size="sm"/>
                </a>
                <ul className="sub-menu" id="sub-view">
                  <li><a href="#">Purchase</a></li>
                  <li><a href="#">Refinance</a></li>
                </ul>
              </li>
              <li>
                <a onClick={rotateCaret}>
                  Learn <FontAwesomeIcon id="caret4" style={{fontSize: 13, marginLeft: 5}} icon={faChevronDown} size="sm"/>
                </a>
                <ul className="sub-menu" id="sub-learn">
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Glossary</a></li>
                </ul>
              </li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">For agents</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <a className="sign-in">Sign in</a>
          <a className="btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;