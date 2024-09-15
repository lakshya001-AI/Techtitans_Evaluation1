
import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Style from "../App.module.css";
import GoogleTranslate from "./googleTranslate";

function MainPage() {
  const navigate = useNavigate();
  const section3Refs = useRef([]);
  const mission1Ref = useRef(null);
  const mission2Ref = useRef(null);
  const mission3Ref = useRef(null);

  function logoutUser() {
    navigate("/");
  }

    useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(Style.animate);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (mission1Ref.current) observer.observe(mission1Ref.current);
    if (mission2Ref.current) observer.observe(mission2Ref.current);
    if (mission3Ref.current) observer.observe(mission3Ref.current);

    return () => {
      if (mission1Ref.current) observer.unobserve(mission1Ref.current);
      if (mission2Ref.current) observer.unobserve(mission2Ref.current);
      if (mission3Ref.current) observer.unobserve(mission3Ref.current);
    };
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(Style.animate);
          }, index * 300); // Delay each element
          observer.unobserve(entry.target);
        }
      });
    }, options);

    section3Refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      section3Refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div className={Style.mainPageDiv}>
        <div className={Style.navBarDiv}>
          <div className={Style.logoDiv}>
            <p className={Style.logoPara}>
              udyog<span className={Style.setuSpan}>Setu</span>
            </p>
          </div>

          <div className={Style.navigationBtnDiv}>
            <Link className={Style.navigationLinks} to="/mainPage">
              Home
            </Link>
            <Link className={Style.navigationLinks} to="/productPage">
              Products
            </Link>
            <Link className={Style.navigationLinks} to="/mentorsPage">
              Mentors
            </Link>
            <Link className={Style.navigationLinks} to="/financePage">
              Finance
            </Link>
            <Link className={Style.navigationLinks} to="/buyersPage">
              Buyers
            </Link>
          </div>

          <div className={Style.registerAndLoginDiv}>
            <GoogleTranslate/>
            <Link className={Style.registerLink} to="/registerPage">Register</Link>
            <button className={Style.logoutBtn} onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>

        <div className={Style.sectionMainPage1}>
          <div className={Style.overlay}>
            <h1 className={Style.section1Heading}>
              Empowering Nano and{" "}
              <span className={Style.microEnterpreneurSpan}>
                Micro-Entrepreneurs
              </span>
            </h1>
            <p className={Style.section1Para}>
              At UdyogSetu, we transform the business landscape for nano and
              micro-entrepreneurs by offering crucial resources and support. Our
              platform provides innovative financial solutions, including
              zero-interest loans and grants, to fuel your growth. We connect
              you with genuine buyers via major e-commerce sites like Flipkart
              and Amazon, and ensure secure transactions with smart contracts.
              Our partnerships with top finance groups and comprehensive
              mentorship programs equip you with the tools to succeed. Join us
              to unlock your business’s full potential and build a resilient
              future.
            </p>
            <button className={Style.joinUsBtn}>Join Us</button>
          </div>
        </div>

        <div className={Style.sectionMainPage2}>
          <h1 className={Style.sectionMainPage2Heading}>
            OUR <span className={Style.setuSpan}>MISSION</span>
          </h1>
          <div className={Style.sectionMainPage2missionDivS}>
            <div className={Style.sectionMainPage2Mission1} ref={mission1Ref}>
              <div className={Style.overlayMission}>
                <p className={Style.missionPara}>
                  Empowering Entrepreneurs for Sustainable Growth
                </p>
              </div>
            </div>
            <div className={Style.sectionMainPage2Mission2} ref={mission2Ref}>
              <div className={Style.overlayMission}>
                <p className={Style.missionPara}>
                  Fostering Connections and Market Expansion
                </p>
              </div>
            </div>
            <div className={Style.sectionMainPage2Mission3} ref={mission3Ref}>
              <div className={Style.overlayMission}>
                <p className={Style.missionPara}>
                  Building a Resilient Entrepreneurial Community
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.sectionMainPage3}>
          <h1 className={Style.sectionMainPage3Heading}>
            How we work to make a{" "}
            <span className={Style.differenceSpan}>difference</span>
          </h1>

          <div className={Style.sectionMainPage3InnerDiv}>
            {["goalsImg1.jpg", "goalsImg2.jpg", "goalsImg3.jpg", "goalsImg4.jpg"].map((img, index) => (
              <div className={`${Style.section3FirstInnerDiv}`} ref={(el) => (section3Refs.current[index] = el)} key={index}>
                <div className={Style.imageDivSection3}>
                  <img src={`\\Assets\\${img}`} alt="" />
                </div>
                <p className={Style.paraSection3}>
                  {["Zero-Interest Finance Program", "Campaigns and Mentorship", "E-Commerce Listings", "Connecting Buyers and Entrepreneurs"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.sectionMainPage4}>
          <h1 className={Style.sectionMainPage4Heading}>
            Potential <span className={Style.setuSpan}>Collaborators</span>
          </h1>

          <div className={Style.sectionMainPage4PartnersDiv}>
            {["avantiFinance.jpg", "arthanFInance.jpg", "KinaraCapitals.jpg", "caspianImg.jpg"].map((img, index) => (
              <div className={Style.section4PartnerDiv} key={index}>
                <img src={`\\Assets\\${img}`} alt="" />
              </div>
            ))}
          </div>
        </div> 

        <div className={Style.sectionMainPage5}>
          <div className={Style.section5InnerDiv}>
            <div className={Style.overlaySection5}>
              <h1>
                India is a nation of entrepreneurs, and the spirit of innovation and possibility is nowhere more apparent than in the country’s 11 million nano enterprises.
              </h1>
              <p>
                Nearly one-third of India’s workforce is employed by micro, small, and medium enterprises (MSMEs), which include nano entrepreneurs who often run small retail or kirana shops. Their economic impact amounts to nearly 30% of the GDP – and growing. With an estimated credit demand of $50 billion, these small businesses represent a big opportunity for the future of India.
              </p>

              <div className={Style.section5InnerDivEStatus}>
                <div className={Style.status1}>
                  <p>
                    <span className={Style.statusSpan}>11 M</span><br />NANO ENTERPRISES IN INDIA
                  </p>
                </div>
                <div className={Style.status1}>
                  <p>
                    <span className={Style.statusSpan}>$50 B</span><br />CREDIT DEMAND IN COUNTRY
                  </p>
                </div>
                <div className={Style.status1}>
                  <p>
                    <span className={Style.statusSpan}>20 M</span><br />POTENTIAL EMPLOYMENT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default MainPage;

