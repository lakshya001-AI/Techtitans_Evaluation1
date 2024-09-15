import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "../App.module.css";
import GoogleTranslate from "../Components/googleTranslate";
import axios from "axios";

function BuyersPage() {
  const navigate = useNavigate();
  function logoutUser() {
    navigate("/");
  }

  const [buyerDetails, setBuyerDetails] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getBuyerDetails() {
      const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");
      console.log(userAadhaarNumber);

      try {
        let response = await axios.post(
          "http://localhost:5000/getBuyerDetails",
          { userAadhaarNumber }
        );

        if (response.status === 200) {
          setBuyerDetails(response.data.buyerDetails);
          setUserName(response.data.userName);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBuyerDetails();
  }, []);

  console.log(buyerDetails);
  console.log(buyerDetails.buyerName);
  

  const AcceptRequest = async (sBuyerName,sProductName,sBuyerEmail) => {
    try {
      const buyerName = sBuyerName;
      const buyerEmail = sBuyerEmail;
      const sellerAcceptedProduct = sProductName;
      const state = "Request Accepted";
      const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");

      const response = await axios.post(
        "http://localhost:5000/sellerAcceptRequests",
        {
          userName,
          buyerName,
          buyerEmail,
          sellerAcceptedProduct,
          state,
          userAadhaarNumber,
        }
      );

      if(response.status === 200){
        toast.success("Request Accepted! we will process the order soon", {
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
      }
    } catch (error) {
      toast.error("An error occurred! Please try again", {
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

    }
  };

  const RejectRequest = async (sBuyerName,sProductName,sBuyerEmail) => {

    try {
      const buyerName = sBuyerName;
      const buyerEmail = sBuyerEmail;
      const sellerAcceptedProduct = sProductName;
      const state = "Request Rejected";
      const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");

      const response = await axios.post(
        "http://localhost:5000/sellerRejectRequests",
        {
          userName,
          buyerName,
          buyerEmail,
          sellerAcceptedProduct,
          state,
          userAadhaarNumber,
        }
      );

      if(response.status === 200){
        toast.success("Thanks for your reply! The buyer will be notified.", {
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
      }
    } catch (error) {
      toast.error("An error occurred! Please try again", {
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

    }


  };

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
            <GoogleTranslate />
            <Link className={Style.registerLink} to="/registerPage">
              Register
            </Link>
            <button className={Style.logoutBtn} onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>

        <div className={Style.mainFinanceDiv}>
          <div className={Style.financeHeading}>
            <h1>
              Bulk <span className={Style.setuSpan}>Buyers.</span>
            </h1>
          </div>
          <div className={Style.financeHeading}>
            <p>Connecting Entrepreneurs with Potential Bulk Buyers.</p>
          </div>

          <div className={Style.financelistingDiv}>
            {buyerDetails.length === 0 ? (
              <div className={Style.noBuyerRequestDiv}>
                <p>No Bulk Buyer requests.</p>
              </div>
            ) : (
              <div className={Style.bulkBuyersDiv}>
                {buyerDetails.map((ele, index) => {
                  return (
                    <div
                      className={Style.buyersProfileDiv}
                      key={ele.id || index}
                    >
                      <h1 className={Style.buyersName}>{ele.buyerName}</h1>
                      <p className={Style.buyersInterestPara}>
                        Product Interest : {ele.productName}
                      </p>
                      <p className={Style.buyersInterestPara}>
                        Product Quantities : {ele.productQuantity}
                      </p>
                      <p className={Style.buyersInterestPara}>
                        Location: {ele.buyerCurrentAddress}
                      </p>
                      <div className={Style.sendRequestDiv}>
                        <button className={Style.acceptBtn} onClick={(e)=>AcceptRequest(ele.buyerName,ele.productName,ele.buyerEmailAddress)}>Accept</button>
                        <button className={Style.sendRequestBtn} onClick={(e)=>RejectRequest(ele.buyerName,ele.productName,ele.buyerEmailAddress)}>Reject</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default BuyersPage;
