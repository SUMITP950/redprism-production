/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

export default function SigninAsHr() {
  const navigation = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigation("/Home");
    }
  });
  useEffect(() => {
    document.title = "Sign In As HR";
  }, []);

  const navigate = useNavigate();

  // form validation

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("*Required")
        // .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .max(50, "Maximum 50 characters length"),
      password: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        // .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  const formik1 = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      otpid: "",
    },
    validationSchema: yup.object({
      mobile: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(10, "Minimum 10 digits")
        .max(10, "Maximum 10 digits"),
      otp: yup
        .string()
        .required("*Required")
        .min(6, "Minimum 6 digits")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .max(6, "Maximum 6 digits"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  // In this section data send to backend
  const sendOtp = () => {
    if (formik1.values.mobile) {
      axios
        .post("http://testredprism.co/api/hrLogin/loginSendOtp", {
          ph_num: formik1.values.mobile,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            formik1.values.otpid = response.data.otp_id;
            // toast.success(`${response.data.mssg}`);
            alert(`Your otp is ${response.data.otp}`);
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          // console.error(error);
          toast.error(`Failed : ${error.message}`);
        });
    }
  };

  const handleApiMobile = () => {
    if (formik1.values.mobile && formik1.values.otp) {
      axios
        .post("http://testredprism.co/api/hrLogin/loginCheckOtp", {
          ph_num: formik1.values.mobile,
          otp: formik1.values.otp,
          otp_id: formik1.values.otpid,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            localStorage.setItem("authToken", response.data.authToken);
            toast.success(`${response.data.mssg}`);
            navigate("/Home");
          }
          if (response.data.status === "error") {
            toast.error(`${response.data.mssg}`);
          }
        })
        .catch((error) => {
          // console.error(error);
          toast.error(`Failed : ${error.message}`);
        });
    }
  };

  // In this section data send to backend
  const handleApi = () => {
    if (formik.values.username && formik.values.password) {
      axios
        .post("http://testredprism.co/api/hrLogin/loginUsername", {
          user_name: formik.values.username,
          password: formik.values.password,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            localStorage.setItem("authToken", response.data.authToken);
            toast.success(`${response.data.mssg}`);
            navigate("/Home");
          }
          if (response.data.status === "error") {
            toast.error(`Failed : ${response.data.mssg}`);
          }
          if (response.data.status === "not found") {
            toast.error(`Failed : ${response.data.mssg}`);
          }
        })
        .catch((error) => {
          // console.error(error);
          toast.error(`Failed : ${error.message}`);
        });
    }
  };

  return (
    <div>
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 d-none d-md-block login-bg-img"></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center login-page-height">
              <div class="col-md-7">
                <h3 class="text-center">Sign in as a HR</h3>
                <p class="mb-4 text-center">Welcome to The Technical World</p>

                <div class="container card shadow d-flex justify-content-center mt-5">
                  {/* <!-- nav options --> */}
                  <ul
                    class="nav nav-justified border-bottom osahan-line-tab mb-5"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <img
                          src="img/icons8-password-48.png"
                          style={{ width: "32px" }}
                        />
                        Mobile ( OTP )
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <img
                          src="img/icons8-male-user-100.png"
                          style={{ width: "32px" }}
                        />
                        Username
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content" id="myTab p-3">
                    {/* <!-- Login Via Mobile Username --> */}
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={formik1.handleSubmit}>
                        <div class="form-group first">
                          <label htmlFor="mobile number">Mobile Number</label>
                          <input
                            type="number"
                            name="mobile"
                            class="form-control"
                            placeholder="Enter Mobile Number"
                            onBlur={sendOtp}
                            onChange={formik1.handleChange}
                            value={formik1.values.mobile}
                          />
                          {formik1.errors.mobile && (
                            <em style={{ color: "red" }}>
                              {formik1.errors.mobile}
                            </em>
                          )}
                        </div>
                        <div class="form-group last mb-3">
                          <label htmlFor="otp">Enter Your OTP</label>
                          <input
                            type="text"
                            name="otp"
                            class="form-control"
                            placeholder="Enter Your OTP"
                            onChange={formik1.handleChange}
                            value={formik1.values.otp}
                          />
                          {formik1.errors.otp && (
                            <em style={{ color: "red" }}>
                              {formik1.errors.otp}
                            </em>
                          )}
                        </div>

                        <button
                          type="submit"
                          class="btn btn-block btn-primary"
                          onClick={handleApiMobile}
                        >
                          <strong>SIGN IN</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="mr-auto">
                            <Link to="/Sendotp" class="forgot-pass">
                              Forgot Password ?
                            </Link>
                          </span>
                          <span class="ml-auto">
                            <Link to="/Registerhr" class="forgot-pass">
                              Creat a new account
                            </Link>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* <!-- Login Via Mobile Number --> */}
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <div class="form-group first">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            placeholder="Enter Your Username"
                            id="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                          />
                          {formik.errors.username && (
                            <em style={{ color: "red" }}>
                              {formik.errors.username}
                            </em>
                          )}
                        </div>
                        <div class="form-group last mb-3">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Your Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                          {formik.errors.password && (
                            <em style={{ color: "red" }}>
                              {formik.errors.password}
                            </em>
                          )}
                        </div>

                        <button
                          type="submit"
                          class="btn btn-block btn-primary"
                          onClick={handleApi}
                        >
                          <strong>SIGN IN</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="mr-auto">
                            <Link to="/Sendotp" class="forgot-pass">
                              Forgot Password ?
                            </Link>
                          </span>
                          <span class="ml-auto">
                            <Link to="/Registerhr" class="forgot-pass">
                              Creat a new account
                            </Link>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* <!-- Login Via Mobile Number End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
