// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Style from "../App.module.css";
// import axios from "axios";
// import GoogleTranslate from "../Components/googleTranslate";

// function ProductsPage() {
//   const navigate = useNavigate();

//   // Product Details State
//   const [productDetails, setProductDetails] = useState([]);



//   function logoutUser() {
//     navigate("/");
//   }

//   const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");

//   useEffect(() => {
//     async function getProductData() {
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/getProductDetails",
//           {
//             userAadhaarNumber,
//           }
//         );
//         const userProductDetails = res.data.productDetails;
//         // console.log('User Product Details:', userProductDetails); // Log the specific data
//         setProductDetails(userProductDetails);
//       } catch (error) {
//         console.log("Error:", error);
//       }
//     }
//     getProductData();
//   }, [userAadhaarNumber]);



//   // ----------- Update Product Functionality ------------- //

//     const [updatedProductName, setUpdatedProductName] = useState("");
//     const [updatedProductDescription, setUpdatedProductDescription] = useState("");
//     const [updatedProductPrice, setUpdatedProductPrice] = useState(""); 

//     // State to manage modal visibility
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Function to open modal
//     const openModal = () => {
//       setIsModalOpen(true);
//     };
  
//     // Function to close modal
//     const closeModal = () => {
//       setIsModalOpen(false);
//     };
  
//     // Function to handle form submission
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Handle the product update logic here
//       console.log({
//         productName,
//         productDescription,
//         productPrice,
//       });
//       closeModal(); // Close modal after submission
//     };

//   // ------------------ Delete the details of the Product --------------- //

//    // State to manage whether the modal is shown
//    const [showConfirmation, setShowConfirmation] = useState(false);
//    const [selectedProductName, setSelectedProductName] = useState(null);

//    // Function to handle delete button click
//    const handleDeleteClick = (productName) => {
//     console.log(productName);
//     setSelectedProductName(productName);
//     setShowConfirmation(true); // Show confirmation modal
//    };
 
//    // Function to handle product deletion after confirmation
//    const confirmDeleteProduct = async () => {
//      // Logic to delete the product from your system and UdyogMart

//      try {

//       const response = await axios.post("http://localhost:5000/deleteProduct",{ userAadhaarNumber , selectedProductName});

//       if(response.status === 200){
//         toast.success("Product Deleted Successfully", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//           className: Style.customToast
//         });
//       }

      
//      } catch (error) {

//       toast.error("Error deleting the product! Try Again", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         transition: Bounce,
//         className: Style.customToast
//       });
      
//      } finally {
//       setShowConfirmation(false);
//      }
//    };
 
//    // Function to handle cancellation
//    const cancelDelete = () => {
//      setShowConfirmation(false); // Close the confirmation modal
//    };




//   return (
//     <>
//       <div className={Style.mainPageDiv}>
//         <div className={Style.navBarDiv}>
//           <div className={Style.logoDiv}>
//             {/* logo div */}
//             <p className={Style.logoPara}>
//               udyog<span className={Style.setuSpan}>Setu</span>
//             </p>
//           </div>

//           <div className={Style.navigationBtnDiv}>
//             {/* navigation Div */}
//             <Link className={Style.navigationLinks} to="/mainPage">
//               Home
//             </Link>
//             <Link className={Style.navigationLinks} to="/productPage">
//               Products
//             </Link>
//             <Link className={Style.navigationLinks} to="/mentorsPage">
//               Mentors
//             </Link>
//             <Link className={Style.navigationLinks} to="/financePage">
//               Finance
//             </Link>
//             <Link className={Style.navigationLinks} to="/buyersPage">
//               Buyers
//             </Link>
//           </div>

//           <div className={Style.registerAndLoginDiv}>
//             {/* login and logout buttons */}
//             <GoogleTranslate/>
//             <Link className={Style.registerLink} to="/registerPage">
//               Register
//             </Link>
//             <button className={Style.logoutBtn} onClick={logoutUser}>
//               logout
//             </button>
//           </div>
//         </div>
//         {/* ------------ product List ---------------- */}
//         <div className={Style.productDetailsMainDiv}>
//           {productDetails.length > 0 ? (
//             <div className={Style.productMapDiv}>
//               {productDetails.map((ele,index) => (
//                 <div className={Style.productDiv} key={ele.id || index}>
//                   <div className={Style.imgDiv}>
//                     <img src={`http://localhost:5000/uploads/${ele.photo}`} alt="" />
//                     <div className={Style.productNameDiv}>
//                       <p className={Style.productNamePara}>{ele.ProductName}</p>
//                     </div>
//                     <div className={Style.productDescriptionDiv}>
//                     <p>{`${ele.productDescription ? ele.productDescription.split(" ").slice(0, 6).join(" ") : ''} .....`}</p>
//                     </div>
//                     <div className={Style.productNameDiv}>
//                       <p
//                         className={Style.sellerInfoPara}
//                       >{`Quantity Sold: ${'0'} | Current Profit: ${'0'}`}</p>
//                     </div>
//                     <div className={Style.productNameDiv}>
//                       <p className={Style.productPricePara}>{`₹${ele.ProductPrice}`}</p>
//                     </div>
//                     <div className={Style.productSellBtnDiv}>
//                       <button className={Style.contactSellerBtn} onClick={openModal}>
//                         Edit Product
//                       </button>
//                       <button className={Style.buyNowBtn} onClick={() => handleDeleteClick(ele.ProductName)}>Delete Product</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <h1>No products</h1>
//           )}
//         </div>

//          {/* Modal for editing product details */}
//       {isModalOpen && (
//         <div className={Style.modal}>
//           <div className={Style.modalContent}>
//             <h2 className={Style.editProductHeading}>Edit Product Details</h2>
//             <form onSubmit={handleSubmit} className={Style.productUpdateForm}>
//               <label className={Style.productUpdateForm}>
//                 Update Product Name:
//                 <input
//                   type="text"
//                   value={updatedProductName}
//                   className={Style.updateInputs}
//                   onChange={(e) => setUpdatedProductName(e.target.value)}
//                 />
//               </label>
//               <label className={Style.productUpdateForm}>
//                 Update Product Description:
//                 <input
//                   value={updatedProductDescription}
//                   type="text"
//                   className={Style.updateInputs}
//                   onChange={(e) => setUpdatedProductDescription(e.target.value)}
//                 />
//               </label>
//               <label className={Style.productUpdateForm}>
//                 Product Price:
//                 <input
//                   type="text"
//                   value={updatedProductPrice}
//                   className={Style.updateInputs}
//                   onChange={(e) => setUpdatedProductPrice(e.target.value)}
//                 />
//               </label>
//               <button type="submit" className={Style.productUpdateBtn}>Update Product</button>
//             </form>
//             <button onClick={closeModal} className={Style.closeUpdateBtn}>Close</button>
//           </div>
//         </div>
//       )}

//        {/* Confirmation modal */}
//        {showConfirmation && (
//         <div className={Style.modal}>
//           <div className={Style.modalContent}>
//             <p>Are you sure you want to delete this product?</p>
//             <p>If you delete this product, it will also be removed from UdyogMart.</p>
//             <div className={Style.modalActions}>
//               <button onClick={confirmDeleteProduct} className={Style.confirmDeleteProductBtn}>
//                 Confirm
//               </button>
//               <button onClick={cancelDelete} className={Style.cancelBtnDeleteProduct}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//         <ToastContainer/>
//       </div>
//     </>
//   );
// }

// export default ProductsPage;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "../App.module.css";
import axios from "axios";
import GoogleTranslate from "../Components/googleTranslate";

function ProductsPage() {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState([]);

  function logoutUser() {
    navigate("/");
  }

  const userAadhaarNumber = localStorage.getItem("userAadhaarNumber");

  useEffect(() => {
    async function getProductData() {
      try {
        const res = await axios.post("http://localhost:5000/getProductDetails", {
          userAadhaarNumber,
        });
        const userProductDetails = res.data.productDetails;
        setProductDetails(userProductDetails);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getProductData();
  }, [userAadhaarNumber]);

  // ----------- Update Product Functionality ------------- //
  const [updatedProductName, setUpdatedProductName] = useState("");
  const [updatedProductDescription, setUpdatedProductDescription] = useState("");
  const [updatedProductPrice, setUpdatedProductPrice] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const openModal = (product) => {
    setCurrentProduct(product);
    setUpdatedProductName(product.ProductName);
    setUpdatedProductDescription(product.productDescription);
    setUpdatedProductPrice(product.ProductPrice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/updateProduct", {
        userAadhaarNumber,
        originalProductName: currentProduct.ProductName,
        updatedProductName,
        updatedProductDescription,
        updatedProductPrice,
      });
      if (response.status === 200) {
        toast.success("Product Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          className: Style.customToast,
        });
      }
      closeModal();
    } catch (error) {
      console.log("Error:", error);
      toast.error("Error updating the product! Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        className: Style.customToast,
      });
    }
  };

  // ------------------ Delete the details of the Product --------------- //

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState(null);

  const handleDeleteClick = (productName) => {
    setSelectedProductName(productName);
    setShowConfirmation(true);
  };

  const confirmDeleteProduct = async () => {
    try {
      const response = await axios.post("http://localhost:5000/deleteProduct", {
        userAadhaarNumber,
        selectedProductName,
      });
      if (response.status === 200) {
        toast.success("Product Deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          className: Style.customToast,
        });
      }
    } catch (error) {
      toast.error("Error deleting the product! Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        className: Style.customToast,
      });
    } finally {
      setShowConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

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
            <Link className={Style.navigationLinks} to="/mainPage">Home</Link>
            <Link className={Style.navigationLinks} to="/productPage">Products</Link>
            <Link className={Style.navigationLinks} to="/mentorsPage">Mentors</Link>
            <Link className={Style.navigationLinks} to="/financePage">Finance</Link>
            <Link className={Style.navigationLinks} to="/buyersPage">Buyers</Link>
          </div>
          <div className={Style.registerAndLoginDiv}>
            <GoogleTranslate />
            <Link className={Style.registerLink} to="/registerPage">Register</Link>
            <button className={Style.logoutBtn} onClick={logoutUser}>logout</button>
          </div>
        </div>

        <div className={Style.productDetailsMainDiv}>
          {productDetails.length > 0 ? (
            <div className={Style.productMapDiv}>
              {productDetails.map((ele, index) => (
                <div className={Style.productDiv} key={ele.id || index}>
                  <div className={Style.imgDiv}>
                    <img src={`http://localhost:5000/uploads/${ele.photo}`} alt="" />
                    <div className={Style.productNameDiv}>
                      <p className={Style.productNamePara}>{ele.ProductName}</p>
                    </div>
                    <div className={Style.productDescriptionDiv}>
                      <p>{`${ele.productDescription ? ele.productDescription.split(" ").slice(0, 6).join(" ") : ''} .....`}</p>
                    </div>
                    <div className={Style.productNameDiv}>
                      <p className={Style.sellerInfoPara}>{`Quantity Sold: ${'0'} | Current Profit: ${'0'}`}</p>
                    </div>
                    <div className={Style.productNameDiv}>
                      <p className={Style.productPricePara}>{`₹${ele.ProductPrice}`}</p>
                    </div>
                    <div className={Style.productSellBtnDiv}>
                      <button className={Style.contactSellerBtn} onClick={() => openModal(ele)}>Edit Product</button>
                      <button className={Style.buyNowBtn} onClick={() => handleDeleteClick(ele.ProductName)}>Delete Product</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>No products</h1>
          )}
        </div>

        {isModalOpen && (
          <div className={Style.modal}>
            <div className={Style.modalContent}>
              <h2 className={Style.editProductHeading}>Edit Product Details</h2>
              <form onSubmit={handleSubmit} className={Style.productUpdateForm}>
                <label className={Style.productUpdateForm}>
                  Update Product Name:
                  <input
                    type="text"
                    value={updatedProductName}
                    className={Style.updateInputs}
                    onChange={(e) => setUpdatedProductName(e.target.value)}
                  />
                </label>
                <label className={Style.productUpdateForm}>
                  Update Product Description:
                  <input
                    value={updatedProductDescription}
                    type="text"
                    className={Style.updateInputs}
                    onChange={(e) => setUpdatedProductDescription(e.target.value)}
                  />
                </label>
                <label className={Style.productUpdateForm}>
                  Product Price:
                  <input
                    type="text"
                    value={updatedProductPrice}
                    className={Style.updateInputs}
                    onChange={(e) => setUpdatedProductPrice(e.target.value)}
                  />
                </label>
                <button type="submit" className={Style.productUpdateBtn}>Update Product</button>
              </form>
              <button onClick={closeModal} className={Style.closeUpdateBtn}>Close</button>
            </div>
          </div>
        )}

        {showConfirmation && (
          <div className={Style.modal}>
            <div className={Style.modalContent}>
              <p>Are you sure you want to delete this product?</p>
              <p>If you delete this product, it will also be removed from UdyogMart.</p>
              <div className={Style.modalActions}>
                <button onClick={confirmDeleteProduct} className={Style.confirmDeleteProductBtn}>
                  Confirm
                </button>
                <button onClick={cancelDelete} className={Style.cancelDeleteProductBtn}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </>
  );
}

export default ProductsPage;




