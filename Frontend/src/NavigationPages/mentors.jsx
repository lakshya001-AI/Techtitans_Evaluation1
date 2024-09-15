import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "../App.module.css";
import axios from "axios";
import GoogleTranslate from "../Components/googleTranslate";

function MentorsPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // MentorShip Information
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");

  function logoutUser() {
    navigate("/");
  }

  function getMentorShip() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  async function submitMentorInformation(event) {
    event.preventDefault(); // Prevent default form submission

    if (userName && userPhone && userMessage) {

      try {
        await axios.post("http://localhost:5000/setMentorRequest", {userName,userPhone,userMessage,userEmail})
        .then((res)=>{

          toast.success("Requested! We will contact you Shortly", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          setTimeout(()=>{
            setShowPopup(false);
          },5000);

        })
        .catch((error)=>{

          toast.error("An Internal Error Occurred! Please try again later", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

        });
        
        
      } catch (error) {

        toast.error("An External Error Occurred! Please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        
      }

      

      
    } else {
      toast.error("All fields are required to submit Form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <div className={Style.mainPageDiv}>
        <div className={Style.navBarDiv}>
          <div className={Style.logoDiv}>
            {/* logo div */}
            <p className={Style.logoPara}>
              udyog<span className={Style.setuSpan}>Setu</span>
            </p>
          </div>

          <div className={Style.navigationBtnDiv}>
            {/* navigation Div */}
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
            {/* login and logout buttons */}
            <GoogleTranslate/>
            <Link className={Style.registerLink} to="/registerPage">
              Register
            </Link>
            <button className={Style.logoutBtn} onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>

        <div className={Style.mentorMainDiv}>
          <h1 className={Style.mentorShipHeading}>
            Mentorship <span className={Style.setuSpan}>Programs</span>
          </h1>

          <div className={Style.mentorListDiv}>
            <div className={Style.mentorsProgramDiv}>
              <img src="/Assets/mentorImg1.jpg" alt="Mentor 1" />
              <p className={Style.mentorShipTitlePara}>
                Finance Talk by Santosh Nair
              </p>
              <p className={Style.timeMentorPara}>
                Saturday August 15 / 12:30 PM
              </p>
              <div className={Style.notifyButtonDiv}>
                <button>Coming Soon</button>
              </div>
            </div>

            <div className={Style.mentorsProgramDiv}>
              <img src="/Assets/mentorsTalk.png" alt="Mentor 2" />
              <p className={Style.mentorShipTitlePara}>
                Decoding Nano Entrepreneur
              </p>
              <p className={Style.timeMentorPara}>
                Saturday August 18 / 5:30 PM
              </p>
              <div className={Style.notifyButtonDiv}>
                <button>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.mentorMainDiv}>
          <h1 className={Style.mentorShipHeadingSecond}>
            Join Our Mentorship <span className={Style.setuSpan}>Programs</span>
          </h1>

          <div className={Style.mentorRequestDiv}>
            <div className={Style.overlayMentor}>
              <h1 className={Style.mentorShipHeading}>Embark on a journey of growth and success with UdyogSetu's Mentorship Program</h1>
              <p className={Style.mentorShipPara}>Our mentors provide personalized advice, valuable insights, and practical solutions to help you navigate the challenges of running a business. Don’t miss this opportunity to elevate your entrepreneurial skills and achieve your business goals with the help of our expert mentors.</p>
              <button className={Style.joinMentorshipBtn} onClick={getMentorShip}>Get Mentorship</button>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className={Style.popup}>
            <div className={Style.popupInner}>
              <h2>Request <span className={Style.setuSpan}>Mentorship</span></h2>
              <form className={Style.formDivMentor} onSubmit={submitMentorInformation}>
                <div className={Style.inputMentorField}>
                  <div className={Style.inputFieldParaDiv}>
                    <p>Name</p>
                  </div>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className={Style.inputMentorField}>
                  <div className={Style.inputFieldParaDiv}>
                    <p>Email (optional)</p>
                  </div>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>

                <div className={Style.inputMentorField}>
                  <div className={Style.inputFieldParaDiv}>
                    <p>Phone</p>
                  </div>
                  <input
                    type="text"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </div>

                <div className={Style.inputMentorField}>
                  <div className={Style.inputFieldParaDiv}>
                    <p>Message</p>
                  </div>
                  <textarea
                    className={Style.textAreaMentor}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className={Style.submitBtnAndCloseBtnDiv}>
                  <button className={Style.submitBtnMentor} type="submit">
                    Submit
                  </button>
                  <button onClick={closePopup} className={Style.closeBtnMentor}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default MentorsPage;


