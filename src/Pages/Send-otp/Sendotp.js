
import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

function Sendotp() {
  useEffect(() => {
    document.title = "Sendotp";
  }, []);

  const [showCreatePass, setShowCreatePass]= useState(false)
  
  const formik = useFormik({
    initialValues: {
      mobile: "",
      otpid:"",
    },
    validationSchema: yup.object({
      mobile: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(10, "Minimum 10 digits")
        .max(10, "Maximum 10 digits"),
    }),
    onSubmit: (values) => {
      
    },
  });
    
 
  const handleApi=()=>{
    if(formik.values.mobile){
      axios
        .post("http://testredprism.co/api/hrForgotPassword/sendOtp", {
          ph_num: formik.values.mobile,
        })
        .then((response) => {
          
        if(response.data.status==="success"){
          formik.values.otpid = response.data.otp_id;
          setShowCreatePass(true)
          alert(`Your otp is ${response.data.otp}`);
          // toast.success(`${response.data.mssg}`);
          }
        if(response.data.status==="error"){
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
        
          toast.error(`Failed : ${error.message}`);
        });
    }
  }
  
  return (
    <>
    {
      showCreatePass ? <CreatePassword otp_id={formik.values.otpid} ph_num={formik.values.mobile} /> : 
    
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 d-none d-md-block login-bg-img-otp"></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center login-page-height">
              <div class="col-md-7">
                <h3 class="text-center">Forgot Your password ?</h3>
                {/* <!-- <p class="mb-4 text-center">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                            adipisicing.</p> --> */}

                <div class="container card shadow d-flex justify-content-center mt-5">
                  {/* <!-- nav options --> */}

                  <div class="tab-content" id="myTab p-3">
                    {/* <!-- Login Via Mobile Username --> */}
                    <div
                      class="tab-pane fade show active pt-3"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <div class="form-group last mb-3">
                          <label for="password">Enter Your Mobile Number</label>
                          <input
                            type="number"
                            name="mobile"
                            class="form-control"
                            placeholder="Enter Mobile Number"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            
                          />
                          {formik.errors.mobile && (
                            <em style={{ color: "red" }}>
                              {formik.errors.mobile}
                            </em>
                          )}
                        </div>

                        <button type="submit" class="btn btn-block btn-primary" onClick={handleApi}>
                          <strong>Send OTP</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="ml-auto">
                            <Link to="/SigninAsHr">
                              Back to Login
                              </Link>
                          </span>
                          {/* <!-- <span class="ml-auto"><a href="#" class="forgot-pass"><strong>Creat a new
                                                        account</strong></a></span> --> */}
                        </div>
                      </form>
                    </div>
                    {/* <!-- Login Via Mobile Number --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}


const CreatePassword=(props)=>{
console.log(props.otp_id);
console.log(props.ph_num);

  useEffect(() => {
    document.title = " CreatePassword";
  }, []);

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      otp: "",
      ph_num:props.ph_num,
      otpid:props.otp_id,
      newpassword:"",
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        // .min(10, "Minimum 10 digits")
        .max(6, "Maximum 6 digits"),
      newpassword: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });


  const handleCreatePass=()=>{
    if(formik.values.otp && formik.values.newpassword){
      axios
      .post("http://testredprism.co/api/hrForgotPassword/savePassword", {
          ph_num: formik.values.ph_num,
          otp: formik.values.otp,
          otp_id: formik.values.otpid,
          password: formik.values.newpassword,
      })
      .then((response) => {
      if(response.data.status==="success"){
        toast.success(`${response.data.mssg}`)
        navigate("/SigninAsHr");
        }
      if(response.data.status==="error"){
          toast.error(`${response.data.mssg}`);
        }
      })
      .catch((error) => {
        // console.error(error);
        toast.error(`Failed : ${error.message}`);
      });
    }
  }

  return(
    <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2 d-none d-md-block login-bg-img-otp"></div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center login-page-height">
          <div class="col-md-7">
            <h3 class="text-center">Forgot Your password ?</h3>
            {/* <!-- <p class="mb-4 text-center">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                        adipisicing.</p> --> */}

            <div class="container card shadow d-flex justify-content-center mt-5">
              {/* <!-- nav options --> */}

              <div class="tab-content" id="myTab p-3">
                {/* <!-- Login Via Mobile Username --> */}
                <div
                  class="tab-pane fade show active pt-3"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group last mb-3">
                      <label for="password">Enter Your OTP</label>
                      <input
                        type="text"
                        name="otp"
                        class="form-control"
                        placeholder="Enter OTP"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.otp}
                        
                      />
                      {formik.errors.otp && (
                        <em style={{ color: "red" }}>
                          {formik.errors.otp}
                        </em>
                      )}
                      </div>
                      <div class="form-group last mb-3">
                       <label for="password">Create New Password</label>
                      <input
                        type="password"
                        name="newpassword"
                        class="form-control"
                        placeholder="Enter new password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.newpassword}
                        
                      />
                      {formik.errors.newpassword && (
                        <em style={{ color: "red" }}>
                          {formik.errors.newpassword}
                        </em>
                      )}
                    </div>

                    <button type="submit" class="btn btn-block btn-primary" onClick={handleCreatePass}>
                      <strong>Confirm Password</strong>
                    </button>

                    <div class="d-flex mb-3 align-items-center mt-3">
                      <span class="ml-auto">
                        <Link to="/SigninAsHr">
                          Back to Login
                          </Link>
                      </span>
                      {/* <!-- <span class="ml-auto"><a href="#" class="forgot-pass"><strong>Creat a new
                                                    account</strong></a></span> --> */}
                    </div>
                  </form>
                </div>
                {/* <!-- Login Via Mobile Number --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sendotp;