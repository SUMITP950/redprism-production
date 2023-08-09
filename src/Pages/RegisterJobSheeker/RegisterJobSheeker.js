import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Sendotp from "../Send-otp/Sendotp";

function RegisterJobSheeker() {
  
 
  const navigation = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigation("/Home");
    }
  }, []);
  useEffect(() => {
    document.title = "Registration";
  }, []);

  const [data, SetData] = useState([]);
  const [data1, SetData1] = useState([]);
  const [data2, SetData2] = useState([]);
  const [locationData, SetLocationData] = useState([]);


  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobseekerRegister/getCompanyList")
      .then((res) => {
        SetData(res.data.companyList);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobseekerRegister/getTechList")
      .then((res) => {
        SetData1(res.data.techList);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobseekerRegister/getExpList")
      .then((res) => {
        SetData2(res.data.expList);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://testredprism.co/api/jobseekerRegister/getLocationList")
      .then((res) => {
        SetLocationData(res.data.locationList);
      });
  }, []);


  // form validation

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      location: "",
      term: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(15, "Maximum 15 characters length"),
      lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(15, "Maximum 15 characters length"),

      email: yup.string().required("*Required").email("Invalid Email"),
      mobile: yup
        .string()
        .required("*Required")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .min(10, "Minimum 10 digits")
        .max(10, "Maximum 10 digits"),
      location: yup.string().required("*Required"),
      // .matches(/^[A-Za-z]+$/, "This field  must be a letter"),
      
      // .matches(/^[A-Za-z]+$/, "This field  must be a letter"),
     
      // .matches(/^[A-Za-z]+$/, "This field  must be a letter"),
      // .matches(/^[0-9]+$/, "This field  must be a number")
      // .min(5, "Minimum 5 digits")
      // .max(10, "Maximum 10 digits"),
      term: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  // registration varify Start

  // form validation
  const formik1 = useFormik({
    initialValues: {
      otp: "",
      otpId: "",
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .required("*Required")
        // .min(6, "Minimum 6 digits")
        .matches(/^[0-9]+$/, "This field  must be a number")
        .max(6, "Maximum 6 digits"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  // registration varify End

  // registration create start

  // form validation

  const formik2 = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("*Required")
        // .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        // .min(3, "Minimum 3 characters length")
        .max(50, "Maximum 50 characters length"),
      password: yup
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

  // registration create End

  // registration tech skills start

  // form validation

  const formik3 = useFormik({
    initialValues: {
      currentCompany: "",
      technicalSkills: "",
      fresher: "",
      ExperienceInYear: "",
    },
    validationSchema: yup.object({
      currentCompany: yup.string().required("*Required"),
      technicalSkills: yup.string().required("*Required"),
      // fresher: yup.string().required("*Required"),
      // ExperienceInYear: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      changeForm("status"); // will be deleted after service call
    },
  });

  // registration tech skills End

  // registration  status start

  const navigate = useNavigate();

  // form validation

  const formik4 = useFormik({
    initialValues: {
      lookingForJob: "",
      noticePeriod: "",
      immediateJoiner: "",
    },
    validationSchema: yup.object({
      lookingForJob: yup.string().required("*Required"),
      // noticePeriod: yup.string().required("*Required"),
      // immediateJoiner: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const handleContact = () => {
    if (
      formik.values.firstName &&
      formik.values.lastName &&
      formik.values.email &&
      formik.values.mobile &&
      formik.values.term
    ) {
      axios
        .post("http://testredprism.co/api/jobseekerRegister/emailCheck", {
          email_id: formik.values.email,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            sendOtp();
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

  const sendOtp = () => {
    axios
      .post("http://testredprism.co/api/jobseekerRegister/registerSendOtp", {
        ph_num: formik.values.mobile,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === "success") {
          // toast.success(`${response.data.mssg}`);
          formik1.values.otpId = response.data.otp_id;
          changeForm("verify");
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
  };

  const otpSuccess = () => {
    if (formik1.values.otp) {
      axios
        .post("http://testredprism.co/api/jobseekerRegister/registerOtpCheck", {
          ph_num: formik.values.mobile,
          otp: formik1.values.otp,
          otp_id: formik1.values.otpId,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            toast.success(`${response.data.mssg}`);
            changeForm("create");
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

  const handleUsername = () => {
    if (formik2.values.username && formik2.values.password) {
      axios
        .post("http://testredprism.co/api/jobseekerRegister/usernameCheck", {
          user_name: formik2.values.username,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.status === "success") {
            changeForm("skill");
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

  const handleApi = () => {
    axios
      .post("http://testredprism.co/api/jobseekerRegister/register", {
        employee_status: "Status",
        status_icon: "Icon",
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        user_name: formik2.values.username,
        password: formik2.values.password,
        ph_num: formik.values.mobile,
        email_id: formik.values.email,
        company_code: formik3.values.currentCompany,
        tech_code: formik3.values.technicalSkills,
        exp_code: formik3.values.ExperienceInYear,
        location_code: formik.values.location,
        looking_job: formik4.values.lookingForJob,
        notice_period: formik4.values.noticePeriod,
        immediate_joinner: formik4.values.immediateJoiner,
        fresher: formik3.values.fresher,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === "error") {
          toast.error(`Failed : ${response.data.mssg}`);
        }
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          navigate("/Signin");
        }
      })
      .catch((error) => {
        // console.error(error);
        toast.error(`Failed : ${error.message}`);
      });
  };

  const changeForm = (formName) => {
    document.getElementById("basic").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("skill").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById(formName).style.display = "block";
  };
  // registration status End

  return (
    <>
      <div className="container" id="basic">
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                {" "}
                <Link>
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet ">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet next future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationBasic" onClick={formik.handleSubmit}>
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div className="col-md-12 text-center">( As a Job Seeker )</div>
            <div className="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div className="col-md-12 text-center">
              <span
                style={{ borderRadius: 10 + "px", backgroundColor: "#fde9f2" }}
                className="px-3 "
              >
                It's free
              </span>
            </div>
            <div className="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <span className="midil">Please fill up more details</span>
            </div>
            <div className="container">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault01">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="First name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />

                    {formik.errors.firstName && (
                      <em style={{ color: "red" }}>
                        {formik.errors.firstName}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault02">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Last name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />

                    {formik.errors.lastName && (
                      <em style={{ color: "red" }}>{formik.errors.lastName}</em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="validationDefaultUsername"
                      placeholder="abc@example.com"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && (
                      <em style={{ color: "red" }}>{formik.errors.email}</em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="phone">Mob No.</label>
                    <input
                      type="number"
                      name="mobile"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Your Mobile No."
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                    />
                    {formik.errors.mobile && (
                      <em style={{ color: "red" }}>{formik.errors.mobile}</em>
                    )}
                  </div>
                  {/* <div className="col-md-8">
                    <b>Gender:</b>
                    <div className="mb-4">
                      <br />
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        onChange={formik.handleChange}
                        required
                      />
                      <label htmlFor="male">Male</label>{" "}
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        onChange={formik.handleChange}
                      />
                      <label htmlFor="female">Female</label>{" "}
                      <input
                        type="radio"
                        id="preferNotToSay"
                        name="gender"
                        value="Prefer Not to Say"
                        onChange={formik.handleChange}
                      />
                      <label htmlFor="preferNotToSay">Prefer Not to Say</label>
                    </div>
                  </div>  */}
                   <div className="col-md-8 mb-3">
                    <label htmlFor="phone">Location</label>
                    <select
                      class="form-control form-control-lg"
                      name="location"
                      id="currentCompany"
                    
                      onChange={formik.handleChange}
                      value={formik.values.location}
                    >
                      <option>--Select Location--</option>
                      {locationData.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {`${item.area}, ${item.city}, ${item.state}`}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    {formik.errors.location && (
                      <em style={{ color: "red" }}>{formik.errors.location}</em>
                    )}
                  </div>
                </div>
                
                {/* <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault04">State</label>
                    <select
                      name="state"
                      class="form-control form-control-lg"
                      id="validationDefault04"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                    >
                      <option>--Select--</option>
                      {data3.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.state}
                            </option>
                          </>
                        );
                      })}
                    </select>

                    {formik.errors.state && (
                      <em style={{ color: "red" }}>{formik.errors.state}</em>
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault03">City</label>
                    <select
                      type="text"
                      name="city"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="City"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    >
                      <option>--Select--</option>
                      {data4.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.city}
                            </option>
                          </>
                        );
                      })}
                    </select>

                    {formik.errors.city && (
                      <em style={{ color: "red" }}>{formik.errors.city}</em>
                    )}
                  </div>

                  <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault05">Area</label>
                    <select
                      type="text"
                      name="area"
                      className="form-control"
                      id="validationDefault05"
                      onChange={formik.handleChange}
                      value={formik.values.area}
                    >
                      <option>--Select--</option>
                      {data5.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.area}
                            </option>
                          </>
                        );
                      })}
                    </select>

                    {formik.errors.area && (
                      <em style={{ color: "red" }}>{formik.errors.area}</em>
                    )}
                  </div>
                </div> */}
                <div className="form-group d-flex align-items-center justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="term"
                      type="checkbox"
                      value={formik.values.term}
                      onChange={formik.handleChange}
                      id="invalidCheck2"
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                  {formik.errors.term && (
                    <em style={{ color: "red" }}>{formik.errors.term}</em>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    onClick={handleContact}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* registrstion varify page Start */}

      <div className="container" id="verify" style={{ display: "none" }}>
        <div className="row">
          <div className="col-md-4 dn ">
            <div class="pindicator">
              <div class="bullet current ">
                {" "}
                <Link to="/RegistrationVarify">
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link>
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet next future">
                <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link to="/RegistrationVarify" onClick={formik1.handleSubmit}>
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            {" "}
            <div class="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div class="col-md-12 text-center">( As a Job Seeker )</div>
            <div class="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div class="col-md-12 text-center">
              <span
                style={{ borderRadius: "10px", backgroundColor: "#fde9f2" }}
                class="px-3 "
              >
                It's free
              </span>
            </div>
            <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil">Please Verify yourself</b>
            </div>
            <div class="container">
              <form onSubmit={formik1.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <p className="d-flex h4 my-5 justify-content-center">OTP</p>
                    <input
                      type="text"
                      name="otp"
                      class="form-control"
                      placeholder="Enter Your 6 Digit OTP"
                      onChange={formik1.handleChange}
                      value={formik1.values.otp}
                    />
                    {formik1.errors.otp && (
                      <em style={{ color: "red" }}>{formik1.errors.otp}</em>
                    )}
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
                  {" "}
                  <button
                    class="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    onClick={otpSuccess}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* registrstion varify page End */}

      {/* registration create start */}

      <div className="container" id="create" style={{ display: "none" }}>
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet future">
                <Link to="/RegistrationCreate" onClick={formik2.handleSubmit}>
                  <span className="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div className="col-md-12 text-center">( As a Job Seeker )</div>
            <div className="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div className="col-md-12 text-center">
              <span className="px-3 py-1 backcolor">It's free</span>
            </div>
            <div className="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Verify yourself
              </b>
            </div>
            <div className="container">
              <form onSubmit={formik2.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="text">User Name</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Your User Name"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik2.handleChange}
                      value={formik2.values.username}
                    />
                    {formik2.errors.username && (
                      <em style={{ color: "red" }}>
                        {formik2.errors.username}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="validationDefaultPassword"
                      placeholder="Create Your Password"
                      aria-describedby="inputGroupPrepend2"
                      onChange={formik2.handleChange}
                      value={formik2.values.password}
                    />
                    {formik2.errors.password && (
                      <em style={{ color: "red" }}>
                        {formik2.errors.password}
                      </em>
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button
                    className="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    onClick={handleUsername}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* registration create end */}

      {/* registration tech skills start */}

      <div className="container" id="skill" style={{ display: "none" }}>
        <div className="row">
          <div className="col-md-4 dn">
            <div class="pindicator">
              <div class="bullet current ">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">1</span>
                </Link>
              </div>
              <div class="bullet current">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">2</span>
                </Link>
              </div>
              <div class="bullet current future">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">3</span>
                </Link>
              </div>
              <div class="bullet future current">
                <Link>
                  <span class="icon1 tns90">4</span>
                </Link>
              </div>
              <div class="bullet future">
                <Link
                  to="/RegistrationTechSkills"
                  onClick={formik3.handleSubmit}
                >
                  <span class="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div class="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div class="col-md-12 text-center">( As a Job Seeker )</div>
            <div class="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div class="col-md-12 text-center">
              <span class="px-3 py-1 backcolor">It's free</span>
            </div>
            <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Enter Your Technical Skills
              </b>
            </div>
            <div class="container mt-3">
              <form onSubmit={formik3.handleSubmit}>
                <div class="form-row d-flex align-items-center justify-content-center">
                  <div class="col-md-8 mb-3">
                    <label htmlFor="currentCompany">
                      Current Company &nbsp;{" "}
                      <Link to="/companyadddetails" class="h6 text-dark">
                        <i
                          className="feather-plus-square left-menu-icon"
                          style={{ color: "var(--pink)" }}
                        ></i>
                      </Link>
                    </label>
                    <select
                      class="form-control form-control-lg"
                      name="currentCompany"
                      id="currentCompany"
                      onChange={formik3.handleChange}
                      value={formik3.values.currentCompany}
                    >
                      <option>--Select--</option>
                      {data.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.company_name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    {formik3.errors.currentCompany && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.currentCompany}
                      </em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="technicalSkills">Technical Skills</label>
                    <select
                      class="form-control form-control-lg"
                      name="technicalSkills"
                      id="technicalSkills"
                      onChange={formik3.handleChange}
                      value={formik3.values.technicalSkills}
                    >
                      <option>--Select--</option>
                      {data1.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.tech_name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    {formik3.errors.technicalSkills && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.technicalSkills}
                      </em>
                    )}
                  </div>

                  <div class="col-md-8 mb-3">
                    <label htmlFor="technicalSkills">Fresher</label>
                    <select
                      class="form-control form-control-lg"
                      name="fresher"
                      id="fresher"
                      onChange={formik3.handleChange}
                      value={formik3.values.fresher}
                    >
                      <option>--Select--</option>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                    {formik3.errors.fresher && (
                      <em style={{ color: "red" }}>{formik3.errors.fresher}</em>
                    )}
                  </div>
                  <div class="col-md-8 mb-3">
                    <label htmlFor="experienceYear">Experience In Year</label>
                    <select
                      class="form-control form-control-lg"
                      name="ExperienceInYear"
                      id="experienceYear"
                      onChange={formik3.handleChange}
                      value={
                        (formik3.values.ExperienceInYear =
                          formik3.values.fresher === "Yes"
                            ? ""
                            : formik3.values.ExperienceInYear)
                      }
                      disabled={formik3.values.fresher === "Yes"}
                    >
                      <option>--Select--</option>
                      {data2.map((item, id) => {
                        return (
                          <>
                            <option value={item._id} key={id._id}>
                              {item.experience}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    {formik3.errors.ExperienceInYear && (
                      <em style={{ color: "red" }}>
                        {formik3.errors.ExperienceInYear}
                      </em>
                    )}
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mt-3">
                  <button
                    class="btn btn-pink mb-5 px-5"
                    type="submit"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* registration tech skills end */}

      {/* registration status end */}

      <div className="container" id="status" style={{ display: "none" }}>
        <div className="row">
          <div className="col-md-4 dn">
            <div className="pindicator">
              <div className="bullet current ">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">1</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">2</span>
                </Link>
              </div>
              <div className="bullet next current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">3</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link to="/RegistrationStatus" onClick={formik4.handleSubmit}>
                  <span className="icon1 tns90">4</span>
                </Link>
              </div>
              <div className="bullet current">
                <Link>
                  <span className="icon1 tns90">5</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="col-md-12 font-weight-bold text-center h1">
              Create an Account!
            </div>
            <div className="col-md-12 text-center">( As a Job Seeker )</div>
            <div className="col-md-12 text-center">
              It only takes a couple of minutes to get started!
            </div>
            <div className="col-md-12 text-center">
              <span className="px-3 py-1 backcolor">It's free</span>
            </div>
            <div className="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
              <b className="midil backcolor px-3 py-1">
                Please Verify yourself
              </b>
            </div>
            <div className="container">
              <form onSubmit={formik4.handleSubmit}>
                <div className="form-row d-flex align-items-center justify-content-center">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="lookingJob">Looking For Job</label>
                    <select
                      className="form-control form-control-lg"
                      name="lookingForJob"
                      id="lookingJob"
                      onChange={formik4.handleChange}
                      value={formik4.values.lookingForJob}
                    >
                      {/* <option>--Select--</option> */}
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.lookingForJob && (
                      <em style={{ color: "red" }}>
                        {formik4.errors.lookingForJob}
                      </em>
                    )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="noticePeriod">Notice Period</label>
                    <select
                      className="form-control form-control-lg"
                      name="noticePeriod"
                      id="noticePeriod"
                      onChange={formik4.handleChange}
                      value={
                        (formik4.values.noticePeriod =
                          formik4.values.lookingForJob === "No"
                            ? "No"
                            : formik4.values.noticePeriod)
                      }
                      disabled={formik4.values.lookingForJob === "No"}
                    >
                      {/* <option>--Select--</option> */}
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.noticePeriod &&
                      formik4.values.lookingForJob === "Yes" && (
                        <em style={{ color: "red" }}>
                          {formik4.errors.noticePeriod}
                        </em>
                      )}
                  </div>
                  <div className="col-md-8 mb-3">
                    <label htmlFor="immediateJoiner">Immediate Joiner</label>
                    <select
                      className="form-control form-control-lg"
                      name="immediateJoiner"
                      id="immediateJoiner"
                      onChange={formik4.handleChange}
                      value={
                        (formik4.values.immediateJoiner =
                          formik4.values.lookingForJob === "No"
                            ? "No"
                            : formik4.values.immediateJoiner)
                      }
                      disabled={formik4.values.lookingForJob === "No"}
                    >
                      {/* <option>--Select--</option> */}
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik4.errors.immediateJoiner &&
                      formik4.values.lookingForJob === "Yes" && (
                        <em style={{ color: "red" }}>
                          {formik4.errors.immediateJoiner}
                        </em>
                      )}
                  </div>
                  <div
                    className="col-md-8 d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <label>
                      <input
                        className="icon-radio"
                        type="radio"
                        name="test"
                        value="small"
                        checked
                      />
                      <img src="img/icon/status.png" className="icon-reg"></img>
                    </label>
                    <label>
                      <input
                        className="icon-radio"
                        type="radio"
                        name="test"
                        value="small"
                        checked
                      />
                      <img src="img/icon/icon2.png" className="icon-reg"></img>
                    </label>
                    <label>
                      <input
                        className="icon-radio"
                        type="radio"
                        name="test"
                        value="small"
                        checked
                      />
                      <img src="img/icon/icon3.png" className="icon-reg"></img>
                    </label>
                    <label>
                      <input
                        className="icon-radio"
                        type="radio"
                        name="test"
                        value="small"
                        checked
                      />
                      <img src="img/icon/icon4.png" className="icon-reg"></img>
                    </label>
                  </div>
                  <div
                    className="col-md-8 d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <center>
                      <p className="icon-font"> 1Year Jobless</p>
                    </center>
                    <center>
                      <p className="icon-font"> Saving Notice Period</p>
                    </center>
                    <p className="icon-font"> Looking Job</p>
                    <p className="icon-font"> Immediate Joiner</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-5">
                  <button
                    onClick={handleApi}
                    className="btn btn-pink mb-5 px-5"
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* registration status end */}
    </>
  );
}

export default RegisterJobSheeker;
