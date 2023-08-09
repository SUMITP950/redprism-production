import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Red Prism";
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/Home");
    }
  }, []);
  return (
    <div>
      <div class="container-fluid page-set">
        <div class="row dn" style={{ height: "100vh" }}>
          <div class="col-md-6 py-5">
            <div class="d-flex align-items-center justify-content-center ">
              <img
                src="img/image/work_2.png"
                alt=""
                style={{ height: "300px" }}
              />
            </div>
            <h2 class=" text-center font-jav">
              <span class="h1" style={{ color: "#35b71d" }}>
                Are
              </span>{" "}
              <b>you a job</b>
              <span class="h1" style={{ color: "#35b71d" }}>
                {" "}
                Seeker
              </span>
              ?
            </h2>
            <div class="font-19 text-center font-myr">
              "The harder you work , The luckier you get."
            </div>
            <div class="d-flex align-items-center justify-content-center mt-5">
              <Link
                to="/RegisterJobSheeker"
                class="btn border shadow btn-landing"
              >
                Register as job Seeker
              </Link>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-3">
              <h6>or</h6>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <a href="#" class="h6 text-dark">
                Already have an account?{" "}
              </a>
              <Link to="/Signin" class="text-danger h6">
                {" "}
                &nbsp; Login as a Job Seeker
              </Link>
            </div>
          </div>
          <div class="col-md-6 bg-info p-5">
            <div class="d-flex align-items-center justify-content-center">
              <img src="img/image/bg-preview.png" alt="" />
            </div>
            <h2 class=" text-center mt-3">
              <span class="h1">Are</span> you an <span class="h1"> HR</span> ?
            </h2>
            <div
              class="font-19"
              style={{
                fontFamily: "Myriad Pro",
                letterSpacing: "0.7px",
                fontWeight: "bold",
              }}
            >
              "Without the right succession planning put to play in human
              resources, we build for the future without a future."
            </div>
            <div class="d-flex align-items-center justify-content-center my-3 ">
              <Link
                to="/Registerhr"
                class="btn btn-outline-warning bg-light shadow"
                style={{
                  border: "2px solid gray",
                  padding: " 10px 90px",
                  fontSize: "20px",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                Register as a HR
              </Link>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <h6>or</h6>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <Link to="/Signin" class="h6 text-dark">
                Already have an account?{" "}
              </Link>
              <Link to="/SigninAsHr" class=" text-dark h6">
                &nbsp; Login as a HR
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- mobile view Start --> */}
        <div class="row dnm">
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-center my-5">
              <img src="img/fav.png" alt="" />{" "}
            </div>
            <div class="row m-5 p-3">
              <div
                class="col-md-6"
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <div class="d-flex">
                  <img
                    src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                    style={{ height: "50px" }}
                    alt=""
                  />
                  <h4 class="  mt-2">
                    <Link to="/RegistrationBasic" class="text-dark">
                      Job Seekers
                    </Link>
                  </h4>
                </div>
                <p class="pl-5">Make your dream journey begins here</p>
              </div>
              <div
                class="col-md-6 mt-5"
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <div class="d-flex">
                  <img
                    src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                    style={{ height: "50px" }}
                    alt=""
                  />
                  <h4 class="  mt-2">
                    <a href="#" class="text-dark">
                      HR Register
                    </a>
                  </h4>
                </div>
                <p class="pl-5">Make your dream journey begins here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
