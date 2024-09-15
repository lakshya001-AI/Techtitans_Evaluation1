import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Style from "../App.module.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function RegisterPage() {

    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [file, setFile] = useState(null);

    function logoutUser() {
        navigate("/");
    }

    async function registerProduct() {

        if (userAadhaarNumber && mobileNumber && ProductName && ProductPrice && Address && City && State && file && userName && productDescription) {
            const formData = new FormData();
            formData.append('userAadhaarNumber', userAadhaarNumber);
            formData.append('mobileNumber', mobileNumber);
            formData.append('ProductName', ProductName);
            formData.append('ProductPrice', ProductPrice);
            formData.append('Address', Address);
            formData.append('City', City);
            formData.append('State', State);
            formData.append('userName',userName);
            formData.append('productDescription',productDescription);
            formData.append('file', file);

            try {
                const response = await axios.post("http://localhost:5000/registerProduct", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                // alert("Product registered successfully!");
                toast.success("Product registered successfully!", {
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

            } catch (error) {
                console.error("Error registering product", error);
                toast.error("Error registering product! try again", {
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

    return <>
        <div className={Style.mainPageDiv}>

            <div className={Style.navBarDiv}>
                <div className={Style.logoDiv}>
                    <p className={Style.logoPara}>udyog<span className={Style.setuSpan}>Setu</span></p>
                </div>
                <div className={Style.navigationBtnDiv}>
                    <Link className={Style.navigationLinks} to="/mainPage">Home</Link>
                    <Link className={Style.navigationLinks} to="/productPage">Products</Link>
                    <Link className={Style.navigationLinks} to="/mentorsPage">Mentors</Link>
                    <Link className={Style.navigationLinks} to="/financePage">Finance</Link>
                    <Link className={Style.navigationLinks} to="/buyersPage">Buyers</Link>
                </div>
                <div className={Style.registerAndLoginDiv}>
                    <Link className={Style.registerLink} to="/registerPage">Register</Link>
                    <button className={Style.logoutBtn} onClick={logoutUser}>logout</button>
                </div>
            </div>

            <div className={Style.registerMainPage}>
                <h1 className={Style.registerProductHeading}>Register Your Product</h1>

                <div className={Style.inputFieldMainDiv}>

                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <p>Name</p>
                            <input type="text" value={userName} readOnly />
                        </div>
                        <div className={Style.inputWithParaDiv}>
                            <p>Mobile No.</p>
                            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        </div>
                    </div>

                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <p>Email Id (optional)</p>
                            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                        </div>
                        <div className={Style.inputWithParaDiv}>
                            <p>Product Name</p>
                            <input type="text" value={ProductName} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                    </div>


                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <p>Product Description</p>
                            <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                        </div>
                        <div className={Style.inputWithParaDiv}>
                            <p>Upload Product Photo</p>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} className={Style.photoInput}/>
                        </div>
                    </div>

                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <p>Product Price</p>
                            <input type="text" value={ProductPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </div>
                        <div className={Style.inputWithParaDiv}>
                            <p>Address</p>
                            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>

                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <p>City</p>
                            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className={Style.inputWithParaDiv}>
                            <p>State</p>
                            <input type="text" value={State} onChange={(e) => setState(e.target.value)} />
                        </div>
                    </div>

                 

                    <div className={Style.inputFieldDiv1}>
                        <div className={Style.inputWithParaDiv}>
                            <button className={Style.registerBtn} onClick={registerProduct}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    </>
}

export default RegisterPage;
