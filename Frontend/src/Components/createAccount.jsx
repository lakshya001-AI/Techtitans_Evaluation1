import React, { useState } from "react";
import Style from "../App.module.css";
import {Link,useNavigate} from "react-router-dom"
import {ToastContainer,toast,Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function CreateAccountPage() {
  const [passState, setPassState] = useState(false);
  const navigate = useNavigate();

  // Create Account Information

  const [name, setName] = useState("");
  const [aadhaarNumber , setAadhaarNumber] = useState("");
  const [password, setPassword] = useState("");

  function changePassState(){
    setPassState(!passState);
  }

  // CreateAccount Function
  async function CreateAccountFunction(){

    if(name && aadhaarNumber && password){

      try {
        await axios.post("http://localhost:5000/createAccount", {name,aadhaarNumber,password})
        .then((res)=>{

          toast.success('Account Created! Please login', {
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

          setTimeout(()=>{
            navigate("/");
          },5000);

        }
        ).catch((err)=>{

          if(err.response && err.response.status === 400){
            toast.error("You're already a member! Please log in to access your account", {
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

          }else{

            toast.error('Server Error! Failed to create account', {
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
  
      }catch (error) {

        toast.error('Error occurred! Failed to create account', {
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
    
    }else{

      toast.warn('All fields are required', {
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
              <h2 className={Style.headingUdyogSetu}>Udyog<span className={Style.setuSpan}>Setu</span></h2>
              <p className={Style.loginPara1}>Empowering Entrepreneurs Every Day</p>
            </div>
          </div>
        <div className={Style.loginInnerDiv2}>
          <h1 className={Style.helloPara}>Create Account</h1>
          <p className={Style.loginInnerDiv2Para1}>Begin Your Journey with UdyogSetu, Create Account Now!</p>
          <div className={Style.loginAadharDiv}>
            <p className={Style.nameInputPara}>Name</p>
            <input type="text" placeholder="xyz" className={Style.nameInput} value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className={Style.loginAadharDiv}>
            <p>Aadhaar No.</p>
            <input type="text" placeholder="1234 1234 1234" value={aadhaarNumber} onChange={(e)=>setAadhaarNumber(e.target.value)}/>
          </div>
          <div className={Style.loginPasswordDiv}>
            <p>Password</p>
            <input type={passState ? "text" : "password"} placeholder="XXXX XXXX XXXX" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className={Style.showPasswordDiv}>
              <button className={Style.showPasswordBtn} onClick={changePassState}>{passState ? "Hide Password" : "Show Password"}</button>
            </div>
          </div>
          <div className={Style.createACCBtnDiv}>
            <button className={Style.getInButton} onClick={CreateAccountFunction}>Create Account</button>
          </div>

          <div className={Style.createAccountDiv}>
            <p>Already have an account?</p>
            <Link className={Style.toCreateAccBtn} to="/">Login</Link>

          </div>
        </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default CreateAccountPage;