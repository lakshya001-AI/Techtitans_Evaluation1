import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Style from "../App.module.css";
import GoogleTranslate from '../Components/googleTranslate';

function FinancePage() {
    const navigate = useNavigate();

    function logoutUser(){
        navigate("/");
    }

    return (
        <>
            <div className={Style.mainPageDiv}>
                <div className={Style.navBarDiv}>
                    <div className={Style.logoDiv}>
                        {/* logo div */}
                        <p className={Style.logoPara}>udyog<span className={Style.setuSpan}>Setu</span></p>
                    </div>
                    <div className={Style.navigationBtnDiv}>
                        {/* navigation Div */}
                        <Link className={Style.navigationLinks} to="/mainPage">Home</Link>
                        <Link className={Style.navigationLinks} to="/productPage">Products</Link>
                        <Link className={Style.navigationLinks} to="/mentorsPage">Mentors</Link>
                        <Link className={Style.navigationLinks} to="/financePage">Finance</Link>
                        <Link className={Style.navigationLinks} to="/buyersPage">Buyers</Link>
                    </div>
                    <div className={Style.registerAndLoginDiv}>
                        {/* login and logout buttons */}
                        <GoogleTranslate/>
                        <Link className={Style.registerLink} to="/registerPage">Register</Link>
                        <button className={Style.logoutBtn} onClick={logoutUser}>logout</button>
                    </div>
                </div>

              

                <div className={Style.mainFinanceDiv}>

                  <div className={Style.financeHeading}>
                  <h1>Finance <span className={Style.setuSpan}>Groups</span></h1>
                  </div>
                  <div className={Style.financeHeading}>
                    <p>Empowering Growth: Financial Solutions Tailored for Nano and Micro-Entrepreneurs</p>
                  </div>
                  
                  <div className={Style.financelistingDiv}>

                    <div className={Style.financeGroupDiv}>
                      <img src="/Assets/avantiFinanceloansImg.jpg" alt="" className={Style.financeCImg}/>
                      <p>Avanti Finance is a financial group that aims to make financial services affordable and accessible in India and help nano/micro Entrepreneurs</p>

                      <Link className={Style.financeLink} to="https://www.avantifinance.in/">Enquiry Now</Link>

                    </div>

                    <div className={Style.financeGroupDiv}>
                      <img src="/Assets/michaelandSusanGroup1.png" alt="" className={Style.financeCImg}/>
                      <p>Michael and susan dell foundation deliver a range of credit and savings options designed for low-income households and help Entrepreneurs</p>

                      <Link className={Style.financeLink} to="https://www.dell.org/">Enquiry Now</Link>

                    </div>

                    <div className={Style.financeGroupDiv}>
                      <img src="/Assets/arthanFinanceImg.jpg" alt="" className={Style.financeCImg}/>
                      <p>Arthan Finance aim and objective of complementing banks as a provider of capital and specifically to self-employed entrepreneurs, MSMEs and consumers in India </p>

                      <Link className={Style.financeLink} to="https://arthan.finance/">Enquiry Now</Link>

                    </div>

                  </div>

                </div>


            </div>
        </>
    );
}

export default FinancePage;
