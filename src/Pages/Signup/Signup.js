import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <div>
      <div class="d-lg-flex half">
        <div class="bg order-1 order-md-2 d-none d-md-block login-bg-img"></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center login-page-height">
              <div class="col-md-7">
                <h3 class="text-center">Welcome Back</h3>
                <p class="mb-4 text-center">
                  Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur adipisicing.
                </p>

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
                      <form action="#" method="post">
                        <div class="form-group first">
                          <label for="mobile number">Mobile Number</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Mobile Number"
                            id="username"
                            required
                          
                          />
                        </div>
                        <div class="form-group last mb-3">
                          <label for="password">Enter Your OTP</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Your OTP"
                            id="password"
                            required
                          />
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">
                          <strong>SIGN IN</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="mr-auto">
                            <a href="#" class="forgot-pass">
                              Forgot Password ?
                            </a>
                          </span>
                          <span class="ml-auto">
                            <Link to="/Signup" class="forgot-pass">
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
                      <form action="#" method="post">
                        <div class="form-group first">
                          <label for="username">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Your Username"
                            id="username"
                            required
                          />
                        </div>
                        <div class="form-group last mb-3">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Your Password"
                            id="password"
                            required
                          />
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">
                          <strong>SIGN IN</strong>
                        </button>

                        <div class="d-flex mb-3 align-items-center mt-3">
                          <span class="mr-auto">
                            <a href="#" class="forgot-pass">
                              Forgot Password ?
                            </a>
                          </span>
                          <span class="ml-auto">
                            <a href="#" class="forgot-pass">
                              Creat a new account
                            </a>
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
