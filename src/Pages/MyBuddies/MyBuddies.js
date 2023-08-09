import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Select from "react-select";

export default function MyBuddies(props) {
  useEffect(() => {
    document.title = "My Buddies";
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div class="py-4">
        <div class="container-fluid body-padding">
          <div class="row justify-content-around">
            <main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div class="row pt-3 pb-3 text-center">
                  <div class="col-lg-4">
                    <b className="h4">Buddies</b>{" "}
                  </div>
                  <div class="col-lg-3"> </div>

                  <div class="col-lg-4">
                    {/* <Select
                      placeholder={"Search Buddies ..."}
                      styles={{
                        control:(baseStyles, state) => ({
                            ...baseStyles,borderRadius:"50px"}),
                       
                        indicatorsContainer: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),

                        indicatorSeparator: (baseStyles, state) => ({
                          ...baseStyles,
                          display: "none",
                        }),
                      }}
                    /> */}
                    <form
                      class="d-none d-sm-inline-block form-inline m-auto my-md-0 mw-100 navbar-search border"
                      style={{ borderRadius: "30px" }}
                    >
                      <div class="input-group ">
                        <input
                          type="text"
                          class="form-control shadow-none border-0 search-btn search-placeholder small-search"
                          placeholder="Search..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <button class="btn search-icon" type="button">
                            <i class="feather-search searchicon"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <ul
                  class="nav nav-justified border-bottom osahan-line-tab"
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
                      {" "}
                      My Buddies
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
                      {" "}
                      Buddies Request
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Send Request
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="p-3  align-items-center w-100" href="#">
                      <div class="row justify-content-center">
                        <div class="col-md-12 ">
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p class=" ">
                                  Business Development Manager <br />{" "}
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3 d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-minus-circle"></i>{" "}
                                    Unfriend
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p>
                                  Business Development Manager
                                  <br />
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3  d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-minus-circle"></i>{" "}
                                    Unfriend
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="p-3 w-100">
                      <div class="row justify-content-center">
                        <div class="col-md-12 ">
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p class=" ">
                                  Business Development Manager
                                  <br />
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3 d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-plus-circle"></i> Accept
                                    request
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p class=" ">
                                  Business Development Manager
                                  <br />
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3  d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-plus-circle"></i> Accept
                                    request
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div class="p-3 w-100">
                      <div class="row justify-content-center">
                        <div class="col-md-12 ">
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p class=" ">
                                  Business Development Manager
                                  <br />
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3 d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-send"></i> Send Request
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-md-12 mt-5 "
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}
                          >
                            <div class="row px-2 padding-bottom">
                              <div class="col-md-3">
                                <img
                                  src="img/user/man-avatar-profile-picture-vector-illustration_268834-538.avif"
                                  alt=""
                                  style={{ height: "100px" }}
                                />
                              </div>
                              <div class="col-md-6">
                                <h4 class="text-dark mt-2">Username</h4>
                                <p class=" ">
                                  Business Development Manager
                                  <br />
                                  Confidential
                                  <br />
                                  Mumbai, Maharashtra
                                </p>
                              </div>
                              <div class="col-md-3  d-flex align-items-center">
                                <div class="ml-4">
                                  <a class="btn btn-dark" href="/MyBuddies">
                                    <i class="feather-send"></i> Send Request
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 aside-tag">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm pt-4 pb-4">
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-user left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Profile">
                        <span class="font-weight-bold">User Name</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-edit left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/ProfileEdit">
                        <span class="font-weight-bold">Edit Profile</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <img src="img/icon/smile.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <Link to="/Profile">
                        <span class="font-weight-bold">User Profile</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-users left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/MyBuddies">
                        <span class="font-weight-bold">My Buddies</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-briefcase left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Jobs">
                        <span class="font-weight-bold">Jobs</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile">
                        <i class="feather-save left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Jobprofile">
                        <span class="font-weight-bold">My Jobs</span>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
            <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 aside-tag">
              <div class="border rounded bg-white mb-3">
                <div class="shadow-sm">
                  <h6 class="pt-3 text-center">Other Option</h6>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-settings left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Setting">
                        <span class="font-weight-bold">Settings</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-log-out left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/SampleResume">
                        <span class="font-weight-bold">Simple Resume</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <i class="feather-file-text left-menu-icon"></i>
                      </div>
                    </div>
                    <div>
                      <Link to="/Training">
                        <span class="font-weight-bold">Trainings</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/training.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <Link to="/FresherJob">
                        <span class="font-weight-bold">Fresher Jobs</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="img/icon/2255545.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <Link to="/Internship">
                        <span class="font-weight-bold">Internship</span>
                      </Link>
                    </div>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="notifications.html"
                  >
                    <div class="mr-3">
                      <div class="icon-circle-profile border-rm">
                        <img
                          src="https://static.thenounproject.com/png/960899-200.png"
                          alt=""
                          class="icon-image"
                        />
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span class="font-weight-bold">Sign Out</span>
                      </Link>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
