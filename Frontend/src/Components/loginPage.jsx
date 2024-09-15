import React, { useState } from "react";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginPage() {
  const [passState, setPassState] = useState(false);
  const navigate = useNavigate();

  // login information

  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [password, setPassword] = useState("");

  function changePassState() {
    setPassState(!passState);
  }

  // login function

  async function loginUser() {
    if (aadhaarNumber && password) {
      try {
        await axios
          .post("http://localhost:5000/login", { aadhaarNumber, password })
          .then((res) => {
            toast.success("Logged in successfully! Welcome to udyogSetu", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              className: Style.customToast
            });

            const user = res.data.user;
            localStorage.setItem("userName", user.name);
            localStorage.setItem("userAadhaarNumber", user.aadhaarNumber);


            setTimeout(() => {
              navigate("/mainPage");
            }, 5000);
          })
          .catch((error) => {
            if (error.response && error.response.status === 401) {
              toast.error(
                "Password is incorrect! Please enter correct password and try again",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  className: Style.customToast,
                  transition: Bounce,
                }
              );
            }else if (error.response && error.response.status === 400) {
              toast.error("Account not Found! Please create your account", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored",
                className: Style.customToast,
                transition: Bounce,
              });
            }else{
              toast.error("Server Error! Failed to login", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                className: Style.customToast,
                transition: Bounce,
              });

            }
          });
      } catch (error) {
        toast.error("Error occurred! Failed to login", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          className: Style.customToast,
          transition: Bounce,
        });
      }
    } else {
      toast.warn("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: Style.customToast,
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <div className={Style.loginMainDiv}>
        <div className={Style.loginInnerDiv}>
          <div className={Style.loginInnerDiv1}>
            <div className={Style.overlayText}>
              <h2 className={Style.headingUdyogSetu}>
                Udyog<span className={Style.setuSpan}>Setu</span>
              </h2>
              <p className={Style.loginPara1}>
                Empowering Entrepreneurs Every Day
              </p>
            </div>
          </div>
          <div className={Style.loginInnerDiv2}>
            <h1 className={Style.helloPara}>Hello,</h1>
            <p className={Style.loginInnerDiv2Para1}>
              Ready to Make a Difference? Log In Now!
            </p>
            <div className={Style.loginAadharDiv}>
              <p>Aadhaar No.</p>
              <input
                type="text"
                placeholder="1234 1234 1234"
                value={aadhaarNumber}
                onChange={(e) => setAadhaarNumber(e.target.value)}
              />
            </div>
            <div className={Style.loginPasswordDiv}>
              <p>Password</p>
              <input
                type={passState ? "text" : "password"}
                placeholder="XXXX XXXX XXXX"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className={Style.showPasswordDiv}>
                <button
                  className={Style.showPasswordBtn}
                  onClick={changePassState}
                >
                  {passState ? "Hide Password" : "Show Password"}
                </button>
              </div>
            </div>
            <div className={Style.loginBtnDiv}>
              <button className={Style.getInButton} onClick={loginUser}>
                login
              </button>
            </div>

            <div className={Style.createAccountDiv}>
              <p>Don't have an account?</p>
              <Link className={Style.toCreateAccBtn} to="/createAccount">
                Create Account
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default LoginPage;
